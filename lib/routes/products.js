'use strict';

var express = require('express');
var router = express.Router();
var db = require('../db');

// Collection
router.get('/products', function(req, res) {
  db.products.find({}, function(err, products) {
    res.json(products);
  });
});

router.post('/products', function(req, res) {
  db.products.insert(req.body, function() {
    res.status(201).json();
  });
});

// Resource
router.get('/products/:id', function(req, res) {
  db.products.findOne({_id: req.params.id}, function(err, product) {
    product ? res.json(product) : res.status(404).json();
  });
});

router.delete('/products/:id', function(req, res) {
  db.products.remove({_id: req.params.id}, {}, function(err, count) {
    count ? res.status(204).json() : res.status(404).json();
  });
});

module.exports = router;
