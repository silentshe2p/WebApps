var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

var config = require('../config.json');
var enfError = require('../models/enf');
var DB = require('../models/db');
var db = new DB();

router.get('/', async (req, res, next) => {
    // Set redirect to root if none provided
    let redirect = (typeof(req.query.redirect) == 'undefined') ? '/' : req.query.redirect;
    try {
        await db.connect(config.mongodbUrl, config.dbName);
        const user = await db.find(config.usersCollection, { "username": req.query.username });
        // Hash provided password to compare with hash in db
        if (bcrypt.compareSync(req.query.password, user[0].password)) {
            let payload = {
                // Expire 2h from now
                "exp": Math.floor(Date.now() / 1000) + (2 * 60 * 60),
                // Authenticated username claim
                "usr": req.query.username
            }
            const token = await jwt.sign(payload, config.secret);
            // Set cookie and redirect
            res.cookie(config.jwtCookie, token);
            res.redirect(redirect);
        }
        else {  // Incorrect password, show login page
            res.render('login', { "redirect": redirect });
        }
        
    } catch (err) {
        if (err instanceof enfError) {  // Provided username not in db, show login page
            res.render('login', { "redirect": redirect });
        } else {
            next(err); 
        }
    }
})

module.exports = router;
