var expect = require('chai').expect;
var proxy = require('proxyquire');

describe('The close operation', function() {

	var close = proxy('../main/cmd-close.js', {
		//
	});

	expect(close).to.be.a('function');

});
