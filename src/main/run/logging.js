/* global require, process, console, module, JSON */

var events = require('events');
var yargs = require('yargs');

function log(level, message, context) {
	console.log('[' + level.toUpperCase() + '] ' + message + ' :: ' + JSON.stringify(context));
}

module.exports = function() {
	var emitter = new events.EventEmitter();

	var quiet = yargs
		.boolean('quiet')
		.alias('q', 'quiet')
		.describe('q', 'Turns off all logging')
		.argv
		.quiet;

	if (quiet) {

		emitter.on('error', function() {
			process.exit(1);
		});

		return emitter;
	}

	emitter.on('error', function(event, message, context) {
		log('error', message, context);
		process.exit(1);
	});

	emitter.on('warn', function(event, message, context) {
		log('warn', message, context);
		process.exit(1);
	});

	var verbosity = yargs
		.count('verbose')
		.alias('v', 'verbose')
		.describe('v', 'Tells the logger to provide more information when logging.')
		.argv
		.verbose;

	if (verbosity < 1) {
		return emitter;
	}

	emitter.on('info', function(event, message, context) {
		log('info', message, context);
		console.log(message);
	});

	if (verbosity < 2) {
		return emitter;
	}

	emitter.on('debug', function(event, message, context) {
		log('debug', message, context);
		console.log(message);
	});

	if (verbosity < 3) {
		return emitter;
	}

	emitter.on('trace', function(event, message, context) {
		log('trace', message, context);
		console.log(message);
	});

	return emitter;
};
