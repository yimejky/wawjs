const assert = require("assert");
// unroll BDD for various implementations
// one of the simple ways to do it
const impls = [
  require("../src/array.js"),
  // require("../src/array2.js"),
  // require("../src/array3.js")
];
impls.forEach(
  (impl, i) => describe(`testing impl #${i + 1}`, () => tests(impl))
);

// 
function tests(array) {
  it("countDefined: count only item with defined index", () => {
    let arr = [0, 1];
    arr[99] = 99;

    assert(array.countDefined(arr) === 3)
  });

  it("filterDefined: return only items with defined index", () => {
    let arr = [0, 1];
    arr[50] = 3;
    arr[99] = 99;

    const newArr = array.filterDefined(arr);
    assert(newArr.length === 4);
    let i = 0;
    assert(arr.every(value => value === newArr[i++]));
  });

  it("array supports sort and reverse function", () => {
    assert(typeof array.sort === 'function');
    assert(typeof array.reverse === 'function');
  });

  it("sort algorithm is identical with Array.prototype.sort", () => {
    let inputs = [
      [2, 1],
      ["b", "a", "c"],
    ];
    inputs.forEach(arr => {
      const sorted = array.sort(arr);
      arr.sort();
      assert.deepStrictEqual(arr, sorted);
    });
  });

  it("sort returns new [], not the same array", () => {
    // just demo of existing method
    let unsorted = [2, 1];
    let sorted = unsorted.sort();
    assert(sorted === unsorted,
      "original Array.prototype.sort is mutating, returns same reference"
    );
    // new iml test
    sorted = array.sort(unsorted);
    assert(unsorted !== sorted, "new sort returns new reference");
  });

  it("sort does not mutate original []", () => {
    // how do you proove object has not been mutated
    let unsorted = [2, 1];
    let sorted = array.sort(unsorted);

    assert(unsorted[0] === 2);
    assert(unsorted[1] === 1);
    assert(unsorted !== sorted)
  });

  it("sort supports compareFunction", () => {
    var unsorted = [1, 2];
    var sorted = array.sort(unsorted, (a, b) => b - a);
    assert.deepStrictEqual(sorted, [2, 1]);
  });

  it("Array.prototype.sort and sparse arrays", () => {
    var a = [0, 1];
    a[99] = 99;

    assert(a.length === 100);
    assert(0 in a);
    assert(!(50 in a));

    a.sort((a, b) => b - a);
    assert(a.length === 100);
    assert(a[0] === 99);
    assert(a[1] === 1);
    assert(a[2] === 0);
    assert(!(3 in a));
  });

  it("array.sort returns shorter array, only with items defined in array", () => {
    var a = [0, 1];
    a[99] = 99;

    var a1 = array.sort(a, (a, b) => b - a);
    assert.equal(a1.length, 3);

    assert(a1[0] === 99);
    assert(a1[1] === 1);
    assert(a1[2] === 0);
  });

  it("reverse", function () {
    const inputs = [
      [2, 1],
      ["b", "a", "c"],
    ];

    inputs.forEach(arr => {
      const reversed = array.reverse(arr);
      arr.reverse();

      assert.deepStrictEqual(reversed, arr);
    });
  });
}