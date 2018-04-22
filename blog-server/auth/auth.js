var jwt = require('jsonwebtoken');
var config = require('../config.json');

async function auth(req, res, next) {
  let token = req.cookies[config.jwtCookie];
  if (!token) { // jwt cookie not incl in header, send unauthorized
    return res.status(401).send("Unauthorized");
  }
  else {  // jwt cookie incl, verify it
    try {
      const decoded = await jwt.verify(token, config.secret);
      // Compare username in jwt and url
      if (req.params.username !== decoded.usr) {
        return res.status(401).send("Mismatched username");
      }
      // User is authorized, call next
      next();

    } catch (err) { // Bad or expired token
      return res.status(401).send("Error verifying token");
    }
  }
}

module.exports = auth;
