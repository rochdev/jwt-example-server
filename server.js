'use strict';

var PORT = 4000;
var app = require('./lib/app');

app.listen(PORT);

console.log('Server started at http://localhost:' + PORT);
