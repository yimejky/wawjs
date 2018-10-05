// sample from npm ajv
'use strict';

var compileSchema = require('./compile')
  , resolve = require('./compile/resolve');
  //....

module.exports = Ajv;

Ajv.prototype.validate = validate;
Ajv.prototype.compile = compile;
Ajv.prototype.addSchema = addSchema;
Ajv.prototype.addMetaSchema = addMetaSchema;
Ajv.prototype.validateSchema = validateSchema;
//....

function Ajv(opts) {

}

// functions
//...
//...

