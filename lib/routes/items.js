'use strict';

var express = require('express');
var router = express.Router();
var db = require('../db');

// Collection
router.get('/items', function(req, res) {
  db.items.find({}, function(err, items) {
    res.json(items);
  });
});

router.post('/items', function(req, res) {
  db.items.insert(req.body, function() {
    res.status(201).json();
  });
});

// Resource
router.get('/items/:id', function(req, res) {
  db.items.findOne({_id: req.params.id}, function(err, item) {
    item ? res.json(item) : res.status(404).json();
  });
});

router.delete('/items/:id', function(req, res) {
  db.items.remove({_id: req.params.id}, {}, function(err, count) {
    count ? res.status(204).json() : res.status(404).json();
  });
});

module.exports = router;
