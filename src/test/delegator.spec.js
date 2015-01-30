/* global require, describe, process */

var expect = require('chai').expect;
var proxy = require('proxyquire');

describe('The console parser', function() {

//	expect(delegator).to.be.a('function');

	describe('Calling the parser with no args', function() {
		process.argv = [ 'cloze' ];
		proxy('../main/delegator.js', {

			'./cmd/config.js': function() {
				expect(true).to.be(false);
			}

		})();
	});

	describe('Calling the parser with "config"', function() {

		describe('and no options', function() {
			process.argv = [ 'cloze', 'config' ];
			proxy('../main/delegator.js', {

				'./cmd/config.js': function() {
					expect(true).to.be(true);
				}

			})();
		});

		describe('and an unrecognised option', function() {
			process.argv = [ 'cloze', 'config', 'squarlo' ];
			proxy('../main/delegator.js', {

				'./cmd/config.js': function() {
					expect(true).to.be(false);
				}

			})();
		});

	});


});
