// from https://github.com/mikeal/caseless/

function Caseless(dict) {
    this.dict = dict || {}
}
Caseless.prototype.set = function( /*..*/ ) {}
Caseless.prototype.has = function(name) {}
Caseless.prototype.get = function(name) {}
Caseless.prototype.swap = function(name) {}
Caseless.prototype.del = function(name) {}

module.exports = Caseless;



var Caseless = require("caseless");
var o = new Caseless({ "A": 10, "b": 20 });
o.get("a");



