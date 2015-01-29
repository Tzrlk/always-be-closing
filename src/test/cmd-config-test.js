var expect = require('chai').expect;
var proxy = require('proxyquire');

define('The config operation', function() {

	var close = proxy('../main/cmd-config.js', {
		//
	});

	expect(close).to.be.a('function');

});
