var yargs = require('yargs');

var commands = {
	close: 'cmd-close.js',
	config: 'cmd-config.js'
};

/**
 * Entry point for the application. Parses the input arguments and determines which sub-functions to execute.
 */
function run(yargs) {

	yargs = yargs || require('yargs');
	// TODO: setup yargs.

	var options = yargs.argv; // This is a stab in the dark.
	var commandName = yargs.argv._[0]; // This is a stab in the dark.
	var commandFile = commands[commandName];
	if (commandFile) {
		var command = require(commandFile);
		return command(options);
	}

	throw new Error('Cannot execute. "' + commandName + '" is not a valid command.');

}

module.exports = run;
