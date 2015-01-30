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
		process.argv = [ 'cloze' ];
		delegator();
	});

	describe('Calling the parser with "config"', function() {

		describe('and no options', function() {
			process.argv = [ 'cloze', 'config' ];
			delegator();
		});

		describe('and an unrecognised option', function() {
			process.argv = [ 'cloze', 'config', 'squarlo' ];
			delegator();
		});

	});


});
