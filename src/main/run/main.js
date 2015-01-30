#!/usr/bin/env node

/* global require, process, console */

var cli = require('../src/main/app.js');

try {
	cli();
	process.exit(0);
} catch (error) {
	console.error(error);
	process.exit(2);
}
