var express = require('express');
var router = express.Router();
var pinterest = require('./pinterest');
var NodeCache = require('node-cache');
var cache = new NodeCache({errorOnMissing: true});

var getCachedMoodBoard = function (req, res) {
	cache.get('mood-board', function(err, board) {
		if (board && board.data && board.data.length) {
			return res.send(board);
		}

		pinterest.getMoodBoard(function(err, board) {
			if (err) {
				return res.status(500).send();
			}

			res.send(board);

			// cache for one week in seconds
			cache.set('mood-board', board, 604800);
		});
	});
};

router.get('/get-mood-board',
	getCachedMoodBoard
);

module.exports = router;
