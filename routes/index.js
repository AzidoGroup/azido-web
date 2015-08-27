module.exports = function (app, route) {
    // catchall route
	route
		.all('*', function (request, response, next) {
			// placeholder for catching each request
			//console.log(request.method, request.url);
			next();
		})
	;

    route
        .get('/', function (request, response) {
            response.render('index.html');
        })

		.get('/about', function (request, response) {
			response.status(418);
			response.end();
        })

		.get('/contact', function (request, response) {
            response.render('contact.html');
        })

		/*
			Verotel postback endpoint
			GET parameters:
			shopID			numerical ID of the website or shop in Verotel system
			referenceID		Original merchant's reference identifier
			SaleID			Generated unique identifier of this purchase in Verotel database
			priceAmount		amount to be processed. in nnn.nn format
			priceCurrency	3 char ISO format code. USD, EUR, GBP, NOK, SEK, DKK, CAD or CHF
			custom1			optional custom text field (Only a-z or 0-9)
			custom2			optional custom text field (Only a-z or 0-9)
			custom3			optional custom text field (Only a-z or 0-9)
			signature		SHA-1 hash generated on data listed above and
							Merchant's private key string
							sha1_hex(signatureKey + ":priceAmount=" + priceAmount
							+ ":priceCurrency=" + priceCurrency + ":referenceID="
							+ referenceID + ":saleID=" + saleID + ":shopID=" + shopID)
		 */

		.all('/postback', function (request, response) {
			console.log(request.method, request.url);
			console.log(request.query);
			if (request.method === 'POST') {
				console.log('body:', request.body);
			}
			if (request.query.result) {
				var status = request.query.result.toString().toUpperCase();
				return response.send(status);
			}
			response.send('DECLINED');
		})

		.all('/postback/nats', function (request, response) {
			console.log('query:', request.query);
			console.log('body:', request.body);
			return response.send('*APPROVED*');
		})

		.get('/success', function (request, response) {
			response.render('success.html');
		})
    ;

    return route;
};
