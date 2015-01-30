/* global require, process, console, module, JSON */

var events = require('events');
var yargs = require('yargs');

function format(level, message, context) {
	return '[' + level.toUpperCase() + '] ' + message + ' :: ' + JSON.stringify(context);
}

function log(level, message, context) {
	console.log(format(level, message, context));
}

var emitter = null;

function createEmitter() {
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
}

function getEmitter() {
	if (!emitter) {
		emitter = createEmitter();
	}

	return emitter;
}

module.exports = {

	error: function(message, context) {
		getEmitter().emit('error', message, context);
	},

	warn: function(message, context) {
		getEmitter().emit('warn', message, context);
	},

	info: function(message, context) {
		getEmitter().emit('info', message, context);
	},

	debug: function(message, context) {
		getEmitter().emit('debug', message, context);
	}

};
