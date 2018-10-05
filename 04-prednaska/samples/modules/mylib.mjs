// library source code 

var counter = 0;

function increment() {
  return counter++;
}
export {increment};

const add = function(x, y) {
  return x + y;
}

export default {
	increment,
	add
};


