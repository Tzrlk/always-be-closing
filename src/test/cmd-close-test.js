var expect = require('chai').expect;
var proxy = require('proxyquire');

define('The close operation', function() {

	var close = proxy('../main/cmd-close.js', {
		//
	});

	expect(close).to.ba.a('function');

});
