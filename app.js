var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var app = express();

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/', index);

app.listen(3000);
console.log('Server is running on port 3000');