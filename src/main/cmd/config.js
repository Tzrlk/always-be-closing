/* global require, module */

var fs = require('fs');
var yargs = require('yargs');

yargs
	.boolean('config');

/**
 * This command creates and/or edits the task management configuration for the current location.
 * @param {Object} config.
 */
module.exports = function config(config) {
	console.log('Executing config task.');

	// TODO: Check to see if a configuration file already exists.
	// TODO: If exists, update with provided properties
	// TODO: if not exists, search upward until one is found.
	// TODO: if not found, prompt for new
	// TODO: if found, prompt for update, or new

};
