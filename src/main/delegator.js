var commands = {
	close: 'cmd-close.js',
	config: 'cmd-config.js'
};

/**
 * Entry point for the application. Parses the input arguments and determines which sub-functions to execute.
 */
function delegator(yargs) {
	try {

		var options = yargs.argv; // This is a stab in the dark.
		var commandName = yargs.argv._[0]; // This is a stab in the dark.
		var commandFile = commands[commandName];
		if (!commandFile) {
			throw new Error('Cannot execute. "' + commandName + '" is not a valid command.');
		}

		var command = require(commandFile);
		return command(options);
	} catch (error) {
		process.exit(1);
	}
}

module.exports = delegator;
