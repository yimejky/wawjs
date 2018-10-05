// library source code 

var counter = 0;

function increment() {
  return counter++;
}
exports.increment = increment;

exports.add = function(x, y) {
  return x + y;
}


