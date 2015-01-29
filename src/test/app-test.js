var expect = require('chai').expect;
var proxy = require('proxyquire');

describe('The console parser', function() {

	var app = proxy('../main/app.js', {

		'./main/cmd-close.js': function() {
			//
		},

		'./main/cmd-config.js': function() {
			//
		}

	});

	describe('Calling the parser with no args', function() {
		app();
	});

	describe('Calling the parser with "close"', function() {

		describe('and no options', function() {
			app('close');
		});

		describe('and an unrecognised option', function() {
			app('close', 'squark');
		});

	});


});
