var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var config = require('../config.json');

router.get('/', async (req, res, next) => {
    let token = req.cookies[config.jwtCookie];
    if (!token) { // jwt cookie not incl in header, redirect to login
        res.redirect('/login?redirect=/edit/');
    }
    else {  // jwt cookie incl, verify it
        try {
          const decoded = await jwt.verify(token, config.secret);
          // User logged in, to app
          next();
        } catch (err) { // Bad or expired token, redirect to login
            res.redirect('/login?redirect=/edit/');
        }
    }     
})

module.exports = router;
