var GoogleImages = require('google-images');
var randomItemInArray = require('random-item-in-array');

// if (!global._babelPolyfill) {
// 	require('babel-polyfill');
// }

exports.header = async (event, context, cb) => {
	const html = `
		<html>
			<body>
				<h1>
					header
				</h1>
			</body>
		</html>
	`;

	const response = {
		statusCode: 200,
		headers: {
			'Content-Type': 'text/html',
		},
		body: html,
	};

	cb(null, response);
}

exports.normal = (event, context, cb) => {
	cb(null, 'normal response');
}

exports.promise = (event, context, cb) => {
	const p = new Promise((resolve, reject) => {
		resolve('promise success');
	});
	p
		.then(r => cb(null, r))
		.catch(e => cb(e));
}

exports.bongBot = (event, context, cb) => {
	const title = `bong ${event.query.text}`;

	var client = new GoogleImages(
		process.env.google_cse_id,
		process.env.google_cse_api_key
	);
	
	client.search(title, {
		safeSearch: 'high',
		type: 'photo'
	}).then(images => {

		var image = randomItemInArray(images);

		cb(null, {
			"text": "Brrruuuhhh",
			"attachments": [
					{
							"image_url": image.url,
					}
			]
		});
	});
};

