var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var config = {
	port: process.env.port || 9000
};

app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/public', express.static('public'));

var Router = express.Router();
var router = require('./routes/index')(app, Router);
app.use('/', router);

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

var server = app.listen(config.port, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});
