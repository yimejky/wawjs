// library source code 
// one or multiple files
var mylib = {};

(function() {
    var counter = 0;

    function increment() {
        return counter++;
    }
    mylib.increment = increment;
}());

mylib.add = (function() {
    return function(x, y) {
        return x + y;
    };
}());

// usage code
// <script src=mylib.js>
// <script src=mylib.math.js>
console.log(mylib.increment());
console.log(mylib.increment());
console.log(mylib.add(1, 2));