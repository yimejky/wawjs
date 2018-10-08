// A)
if (!Object.getPrototypeOf) {
  Object.getPrototypeOf = function getPrototypeOf(object) {
    //...	
  };
}

// B) 
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    // enumerable:false, writable:false, configurable:false
    value: function(searchElement, fromIndex) {
      //...
    }
  });
}

// C) 
has.add("bug-for-in-skips-shadowed", function() {
  // if true, the for-in iterator skips object properties 
  // that exist in Object's prototype (IE 6 - ?)
  for (var i in { toString: 1 }) {
    return 0;
  }
  return 1;
});

// D)
var isArray = Array.isArray || function isArray(obj) {
  return toStr(obj) === '[object Array]';
};
