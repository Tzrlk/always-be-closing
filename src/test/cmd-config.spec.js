var expect = require('chai').expect;
var proxy = require('proxyquire');

describe('The config operation', function() {

	var close = proxy('../main/cmd-config.js', {
		//
	});

	expect(close).to.be.a('function');

});
