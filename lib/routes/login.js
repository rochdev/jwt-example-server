'use strict';

var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var db = require('../db');
var config = require('../config');

router.post('/login', function(req, res) {
  var user = db.users.find({
    username: req.body.username,
    password: req.body.password
  });

  if (!user) {
    res.status(401).json({
      message: 'Invalid username or password'
    });
  } else {
    res.json({
      token: jwt.sign({username: user.username}, config.secret)
    });
  }
});

module.exports = router;
