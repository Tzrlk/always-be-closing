#!/usr/bin/env node

/* global require, process, console */

var yargs = require('yargs');
var cli = require('../src/main/app.js');

try {
	cli(yargs.argv);
	process.exit(0);
} catch (error) {
	console.error(error);
	process.exit(2);
}
