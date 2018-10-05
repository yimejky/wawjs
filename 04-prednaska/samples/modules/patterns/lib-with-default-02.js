'use strict';
module.exports = balanced;
function balanced(a, b, str) {
  //...
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  //...
}
