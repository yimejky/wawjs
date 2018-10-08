//
// npm dashdash

var assert = require('assert-plus');
var format = require('util').format;
var fs = require('fs');
var path = require('path');


function renderTemplate(s, d) {}

function shallowCopy(obj) {}

function space(n) {}

function makeIndent(arg, deflen, name) {}

function textwrap(s, width) {}

function optionKeyFromName(name) {}

function parseBool(option, optstr, arg) {}

function parseString(option, optstr, arg) {}

function parseNumber(option, optstr, arg) {}

function parseInteger(option, optstr, arg) {}

function parsePositiveInteger(option, optstr, arg) {}

function parseDate(option, optstr, arg) {}
var optionTypes = {
    /*...*/
};

function Parser(config) {}
Parser.prototype.optionTakesArg = function optionTakesArg(option) {};
Parser.prototype.parse = function parse(inputs) {};
Parser.prototype.help = function help(config) {};
Parser.prototype.bashCompletion = function bashCompletion(args) {};

const BASH_COMPLETION_TEMPLATE_PATH = path.join(
    __dirname, '../etc/dashdash.bash_completion.in');

function bashCompletionSpecFromOptions(args) {}

function bashCompletionFromOptions(args) {}

function createParser(config) {}

function parse(config) {}

function addOptionType(optionType) {}

function getOptionType(name) {}

function synopsisFromOpt(o) {};
module.exports = {
    createParser: createParser,
    Parser: Parser,
    parse: parse,
    addOptionType: addOptionType,
    getOptionType: getOptionType,
    synopsisFromOpt: synopsisFromOpt,

    BASH_COMPLETION_TEMPLATE_PATH: BASH_COMPLETION_TEMPLATE_PATH,
    bashCompletionFromOptions: bashCompletionFromOptions,
    bashCompletionSpecFromOptions: bashCompletionSpecFromOptions,


    parseBool: parseBool,
    parseString: parseString,
    parseNumber: parseNumber,
    parseInteger: parseInteger,
    parsePositiveInteger: parsePositiveInteger,
    parseDate: parseDate
};