var request = require('request');
var config = require('../config/config');

var pinterest = module.exports = {};

pinterest.getMoodBoard = function (cb) {
	request({
		url: 'https://api.pinterest.com/v1/boards/kobrahhzone/mood/pins',
		method: 'GET',
		json: true,
		qs: {
			access_token: config.pinterest.access_token
		}
	}, function (err, response, body) {
		if (err) {
			return cb(err);
		}

		if (response.statusCode !== 200) {
			return cb(new Error('unexpected status code: ' + response.statusCode));
		}

		cb(null, body);
	});
};
