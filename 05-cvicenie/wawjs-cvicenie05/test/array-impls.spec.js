const assert = require("assert");
// unroll BDD for various implementations
// one of the simple ways to do it
const impls = [
  require("../src/array.js"),
  // require("../src/array2.js"),
  // require("../src/array3.js")
];
impls.forEach(
  (impl, i) => describe(`testing impl #${i+1}`, () => tests(impl))
);

// 
function tests(array) {
  it.skip("array supports sort and reverse function", () => {
    // TODO: implement test
    
  });
  it.skip("sort algorithm is identical with Array.prototype.sort", () => {
    let inputs = [
      [2, 1],
      ["b", "a", "c"],
    ];
    inputs.forEach(arr => {
      // TODO: implement test, for each given inputs
    });
  });
  it.skip("sort returns new [], not the same array", () => {

    // just demo of existing method
    var unsorted = [2, 1];
    var sorted = unsorted.sort();
    assert(sorted === unsorted,
      "original Array.prototype.sort is mutating, returns same reference"
    );
    // new iml test
    // TODO: implement test for new method
    
    
  });
  it.skip("sort does not mutate original []", () => {
    // TODO: fix the test this one is lame
    // how do you proove object has not been mutated
    var unsorted = [2, 1];
    var sorted = array.sort(unsorted);
    assert(unsorted[0] === 2);
    assert(unsorted[1] === 1);
  });
  it.skip("sort supports compareFunction", () => {
    
    var unsorted = [1, 2];
    var sorted = array.sort(unsorted, (a, b) => b - a);
    assert.deepStrictEqual(sorted, [2, 1]);
  });

  it.skip("Array.prototype.sort and sparse arrays", () => {

    var a = [0, 1];
    a[99] = 99;

    assert(a.length === 100);
    assert(0 in a);
    assert(!(50 in a));

    a.sort((a, b) => b - a)
    assert(a.length === 100);
    assert(a[0] === 99);
    assert(a[1] === 1);
    assert(a[2] === 0);
    assert(!(3 in a));
  });

  it.skip("array.sort returns shorter array, only with items defined in array", () => {

    var a = [0, 1];
    a[99] = 99;


    var a1 = array.sort(a, (a, b) => b - a)
    assert.equal(a1.length, 3);

    assert(a1[0] === 99);
    assert(a1[1] === 1);
    assert(a1[2] === 0);
  });
  it.skip("reverse", function() {
    // TODO: all in one test for all reverse features
    //
    //

  });
}