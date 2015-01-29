var yargs = require('yargs');

var commands = {
	close: 'cmd-close.js',
	config: 'cmd-config.js'
};

/**
 * Entry point for the application. Parses the input arguments and determines which sub-functions to execute.
 */
function run() {

	var options = yargs.argv; // This is a stab in the dark.
	var commandName = options['command']; // This is a stab in the dark.
	var commandFile = commands[commandName];
	if (commandFile) {
		var command = require(commandFile);
		return command(options);
	}

	throw new Error('Cannot execute. "' + commandName + '" is not a valid command.');

}

module.exports = run;
