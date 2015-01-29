#!/usr/bin/env node

/* global require, process, console */

var yargs = require('yargs');

var logging = require('./logging.js');
var cli = require('../src/main/app.js');

try {
	cli.call(logging(), yargs.argv);
	process.exit(0);
} catch (error) {
	console.error(error);
	process.exit(2);
}
