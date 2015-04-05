var chai = require('chai');

var get = require('../lib/get.js');

var assert = chai.assert;

describe('get', function() {

	it('works without default', function() {

		var result = get({ x: { y: { z: 'test' } } }, ['x', 'y', 'z']);

		assert.strictEqual(result, 'test');

	});

	it('works with default', function() {

		var result = get({ x: { y: {} } }, ['x', 'y', 'z'], 'default');

		assert.strictEqual(result, 'default');

	});

});
