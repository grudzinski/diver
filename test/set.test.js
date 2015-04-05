var chai = require('chai');

var set = require('../lib/set.js');

var assert = chai.assert;

describe('set', function() {

	it('works', function() {

		var testObject = {};

		set(testObject, ['x', 'y', 'z'], 'test');

		assert.deepEqual(testObject, { x: { y: { z: 'test' } } });

	});

	it('works 2', function() {

		var testObject = {};

		set(testObject, ['x', 'y', 'z'], 'test');
		set(testObject, ['x', 'y', 'q'], 'test2');

		assert.deepEqual(testObject, { x: { y: { z: 'test', q: 'test2' } } });

	});

});
