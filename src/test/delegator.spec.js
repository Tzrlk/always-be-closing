/* global require, describe */

var expect = require('chai').expect;
var proxy = require('proxyquire');

describe('The console parser', function() {

	var delegator = proxy('../main/delegator.js', {

		'./main/cmd-close.js': function() {
			//
		},

		'./main/cmd-config.js': function() {
			//
		}

	});

	expect(delegator).to.be.a('function');

	describe('Calling the parser with no args', function() {
		delegator({ _: [] });
	});

	describe('Calling the parser with "close"', function() {

		describe('and no options', function() {
			delegator({ _: [ 'close' ] });
		});

		describe('and an unrecognised option', function() {
			delegator({ _: [ 'close', 'squark' ] });
		});

	});


});
