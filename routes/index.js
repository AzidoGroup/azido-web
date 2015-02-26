module.exports = function (app, route) {
    // catchall route
	route
		.all('*', function (request, response, next) {
			// placeholder for catching each request
			next();
		})
	;

    route
        .get('/', function (request, response) {
            response.render('index.html');
        })
    ;

    return route;
};
