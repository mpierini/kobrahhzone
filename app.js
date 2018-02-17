var express = require('express');
var app = express();
var config = require('./config/config');

app.use(express.static('templates'));
app.use(require('./routes'))

app.listen(config.port, function () {
	console.log('Kobrahh zone started!')
});
