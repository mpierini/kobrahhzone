var assert = require('assert');
var pinterest = require('../routes/pinterest');

function getMoodBoard (done) {
	pinterest.getMoodBoard(function (err, board) {
		assert.ok(!err, err);
		assert.ok(board.data.length);
		done();
	})
};

describe('test kobrahh zone', function () {
	it('tests that the pinterest mood board is fetched', getMoodBoard);
});
