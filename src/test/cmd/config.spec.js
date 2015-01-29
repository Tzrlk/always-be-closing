/* global require, describe */

var expect = require('chai').expect;
var proxy = require('proxyquire');

describe('The config operation', function() {

	var close = proxy('../main/config.js', {
		//
	});

	expect(close).to.be.a('function');

});
