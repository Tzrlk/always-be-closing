/* global require, module */

var yargs = require('yargs');
var logger = require('./util/logger.js');

yargs
	.usage('Usage: $0 [cmd] <opts>')
	.demand(2, 'Some kind of operation is needed.');

var commands = {
	config: require('./cmd/config.js')
};

/**
 * Entry point for the application. Parses the input arguments and determines which sub-functions to execute.
 */
module.exports = function delegator() {

	var commandName = yargs.argv._[1];
	var commandFile = commands[commandName];

	if (!commandFile) {
		logger.error('Cannot execute. Command is not recognised.', commandName);
		return;
	}

	var command = require(commandFile);
	command();

};
