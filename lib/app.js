'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');
var cors = require('cors');
var jwt = require('express-jwt');
var morgan = require('morgan');
var app = express();
var config = require('./config');
var db = require('./db');
var unauthorized = require('./middlewares/unauthorized');

// Middlewares
app.use(cors());
app.use(morgan('combined'));
app.use(jwt({secret: config.secret}).unless({path: ['/login']}));
app.use(bodyParser.json());
app.use(compression());
app.use(unauthorized());

// Routers
app.use(require('./routes/login'));
app.use(require('./routes/items'));
app.use(require('./routes/products'));

db.seed();

module.exports = app;
