var yargs = require('yargs');

/* global require, module */

var commands = {
	close: 'close.js',
	config: 'config.js'
};

/**
 * Entry point for the application. Parses the input arguments and determines which sub-functions to execute.
 */
function delegator() {

	yargs
		.usage('Usage: $0 [cmd] <opts>')
		.demand(2, 'Some kind of operation is needed.');

	var commandName = yargs.argv._[1]; // This is a stab in the dark.
	var commandFile = commands[commandName];
	if (!commandFile) {
		this.emit('Cannot execute. Command is not recognised.', commandName);
		return;
	}

	var command = require(commandFile);
	command.call(this);

}

module.exports = delegator;
