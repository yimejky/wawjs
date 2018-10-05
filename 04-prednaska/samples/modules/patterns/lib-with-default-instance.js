// https://github.com/tj/commander

exports = module.exports = new Command();
exports.Command = Command;
exports.Option = Option;

function Option(flags, description) {
}
function Command(name) {
}
// 
Command.prototype.command = function(name, desc, opts) {}
Command.prototype.arguments = function(desc) {};
//...

function camelcase(flag) {}
function pad(str, width) {}

