/* globals require, module */

var nodegit = require('nodegit');
var Promise = require('promise');

var $service = module.exports = {};

function promise(callback) {
	return function() {
		var $args = arguments;
		return new Promise(function() {
			callback(arguments.concat($args));
		}
	}
}

$service.update = promise(function(resolve, reject, options) {
	//TODO: use nodegit to check for existing repository, then update it
	//with options.
};

