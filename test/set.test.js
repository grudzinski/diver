var chai = require('chai');

var set = require('../lib/set.js');

var assert = chai.assert;

describe('set', function() {

	it('works', function() {

		var testObject = {};

		debugger;

		set(testObject, ['x', 'y', 'z'], 'test');

		assert.deepEqual(testObject, { x: { y: { z: 'test' } } });

	});

});
