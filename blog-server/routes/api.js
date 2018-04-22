var express = require('express');
var router = express.Router();

var config = require('../config.json');
var enfError = require('../models/enf');
var DB = require('../models/db');
var db = new DB();
// Middleware to restrict access to only authenticated users
var auth = require('../auth/auth');

// Get all posts by a user
router.get('/:username', auth, async (req, res, next) => {
  try {
    await db.connect(config.mongodbUrl, config.dbName);
    // Find posts by the user
    const posts = await db.find(config.postsCollection, { "username": req.params.username }, 0);
    // Delete unwanted fields: _id and username
    for (let post of posts) {
      delete post._id;
      delete post.username;
    }
    // Send posts as json
    res.json(posts);

  } catch (err) {
    if (err instanceof enfError) {  // User not found
      res.status(404);
      res.json([]);
    } else {
      next(err); 
    }   
  }
})

// Get a certain post by a user
router.get('/:username/:postid', auth, async (req, res, next) => {
  try {
    await db.connect(config.mongodbUrl, config.dbName);
    const posts = await db.find(config.postsCollection, { "username": req.params.username, "postid": parseInt(req.params.postid) });
    // Delete unwanted fields: _id, username and postid
    delete posts[0]._id;
    delete posts[0].username;
    delete posts[0].postid;
    // Send post as json
    res.json(posts[0]);

  } catch (err) {
    if (err instanceof enfError) {  // Post not found
      res.status(404).send("Post not found");
    } else {
      next(err);
    }
  }
})

// Insert new post
router.post('/:username/:postid', auth, async (req, res, next) => {
  // Validate request
  if ((!req.is('application/json')) || (typeof(req.body.title) == 'undefined') || (typeof(req.body.body) == 'undefined')) {
    res.status(400).send("Bad request");
  }
  else {
    try {
      await db.connect(config.mongodbUrl, config.dbName);
      await db.find(config.postsCollection, { "username": req.params.username, "postid": parseInt(req.params.postid) });
      // Post with provided username and postid existed, bad request
      res.status(400).send("Post already existed");

    } catch (err) {
      if (err instanceof enfError) {  // Postid not existed yet, insert to db
          let now = new Date().getTime();
          try {
            await db.insertOne(config.postsCollection, { "postid": parseInt(req.params.postid), "username": req.params.username, "created": now, "modified": now, "title": req.body.title, "body": req.body.body });
            res.status(201).send("Post created");
          } catch (err) {
            next(err);
          }
      } else {
        next(err);
      }
    }
  }
})

// Update an existing post
router.put('/:username/:postid', auth, async (req, res, next) => {
  // Validate request
  if ((!req.is('application/json')) || (typeof(req.body.title) == 'undefined') || (typeof(req.body.body) == 'undefined')) {
    res.status(400).send("Bad request");
  }
  else {
    try {
      await db.connect(config.mongodbUrl, config.dbName);
      await db.find(config.postsCollection, { "username": req.params.username, "postid": parseInt(req.params.postid) });
      // Post with provided username and postid existed, update it
      let now = new Date().getTime();
      try {
        await db.updateOne(config.postsCollection, { "username": req.params.username, "postid": parseInt(req.params.postid) }, { $set: {"title": req.body.title, "body": req.body.body, "modified": now} });
        res.status(200).send("Post updated");
      } catch (err) {
        next(err);
      }
  
    } catch (err) {
      if (err instanceof enfError) {  // Post not found, bad request
        res.status(400).send("Post not found");
      } else {
        next(err);
      }
    }
  }
})

// Delete a post
router.delete('/:username/:postid', auth, async (req, res, next) => {
  try {
    await db.connect(config.mongodbUrl, config.dbName);
    await db.find(config.postsCollection, { "username": req.params.username, "postid": parseInt(req.params.postid) });
    // Post with provided username and postid existed, delete it
    try {
      await db.deleteOne(config.postsCollection, { "username": req.params.username, "postid": parseInt(req.params.postid) });
      res.status(204).send("Post deleted");
    } catch (err) {
      next(err);
    }

  } catch (err) {
    if (err instanceof enfError) {  // Post not found, bad request
      res.status(400).send("Post not found");
    } else {
      next(err);
    }
  }
})

module.exports = router;
