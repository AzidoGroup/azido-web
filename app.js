console.log(process.env);

var express = require('express');
var app = express();
var config = {
	port: process.env.port || 3000
};

app.get('/', function (request, response, next) {
	response.send('explosions! - dude, change this text in github!');
});


var server = app.listen(config.port, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});
