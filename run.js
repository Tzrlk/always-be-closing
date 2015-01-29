#!/usr/bin/env node

var cli = require('../src/main/app.js');
var arg = require('yargs').argv;

var result = cli(arg);
process.exit(result);
