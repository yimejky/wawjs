module.exports = {
  allOwnKeys,
  allOwnValues,
  allOwnEntries,
  getProtoChain,
  allKeys,
  forIn,
  shallowClone,
  hasInheritedProperty,
  hasOverridenProperty
};
// Object.keys supporting Symbols and non-enumerables 
function allOwnKeys(o) {
  // LOC:3
}
// Object.values supporting Symbols and non-enumerables 
function allOwnValues(o) {
  // LOC: 1
}
// Object.entries supporting Symbols and non-enumerables 
function allOwnEntries(o) {
   // LOC: 1
}
// [obj,...protos] array of objects in proto chain
// starting with obj itself and up-the chain
function getProtoChain(obj) {
  //LOC: 7
}
// Object.keys including, inherited, not-enumeble, symbols  
function allKeys(obj) {
  //LOC: 10
}

// for..in loop supporting Symbols and non-enumerable
// for own and inherited properties
function forIn(obj, callback) {
  //LOC: 1
}
// create copy of object 
// with same propereties, 
// including symbols, 
// same values 
// and same property ownership 
function shallowClone(obj) {
  // LOC: 4
}

// if the property exists only in proto chain
// not on object
function hasInheritedProperty(obj, prop) {
  //LOC:2
}

function hasOverridenProperty(obj, prop) {
  //LOC:5
}