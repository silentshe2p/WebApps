var express = require('express');
var router = express.Router();
var commonmark = require('commonmark');

var config = require('../config.json');
var DB = require('../models/db');
var db = new DB();

// Get all posts by a user
router.get('/:username', async (req, res, next) => {
  try {
    await db.connect(config.mongodbUrl, config.dbName);
    // Only use start value if it's valid
    const [posts, anotherQueryPossible] = ((typeof(req.query.start) != 'undefined') && !isNaN(req.query.start))
                                        ? await db.findAhead(config.postsCollection, { "username": req.params.username, "postid": { $gte: parseInt(req.query.start) } }, config.postLimit)
                                        : await db.findAhead(config.postsCollection, { "username": req.params.username }, config.postLimit);
    // If anotherQueryPossbile then next button starts from the next post of the last post in posts
    // else next button start from post #1
    let nextPath = anotherQueryPossible ? (req.baseUrl + '/' + req.params.username + '?start=' + (posts[posts.length-1].postid+1)) 
                                        : (req.baseUrl + '/' + req.params.username + '?start=1');
    // Pass commonmark to do the rendering in the view
    res.render('posts', { "commonmark": commonmark, "posts": posts, "nextPath": nextPath });

  } catch (err) {
    next(err);
  }
})

// Get a certain post by a user
router.get('/:username/:postid', async (req, res, next) => {
  try {
    await db.connect(config.mongodbUrl, config.dbName);
    const posts = await db.find(config.postsCollection, { "username": req.params.username, "postid": parseInt(req.params.postid) });
    res.render('post', { "commonmark": commonmark, "post": posts[0] });
    
  } catch (err) {
    next(err);
  }
})

module.exports = router;
