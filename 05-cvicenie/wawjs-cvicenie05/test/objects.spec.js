'use strict'
const assert = require("assert");
describe("exploratory test for object manipolations", function () {

  const s = Symbol();

  function demoObject() {
    /*
    	{
			inherited:1,
			enumebrable:1,
			nonenumerable:1
			[Symbol()]:1,
			nested:{
				n:1
			}
    	}
    	*/
    let p = {inherited: 1};

    let o = Object.create(p, {
      nonenumerable: {enumerable: false, value: 1},
      enumerable: {enumerable: true, value: 1},
      [s]: {enumerable: true, value: 1},
      nested: {enumebrable: true, value: {n: 1}}
    });
    assert(o.enumerable === 1);
    assert(o.nonenumerable === 1);
    assert(o[s] === 1);
    assert(o.inherited === 1);
    assert(o.nested.n === 1);
    return o;
  }


  it("Object.assign() triggers setters whereas spread syntax doesn't", function (done) {
    const obj = {
      set testValue(value) {
        done();
      }
    };
    const objTwo = {testValue: true};

    const newObj = {...obj, ...objTwo};
    Object.assign(obj, objTwo);

  });

  it("Mimic the Object.assign() function with spread", function () {
    function merge(...objects) {
      return objects.reduce((accumulator, item) => ({...accumulator, ...item}), {})
    }

    assert.deepStrictEqual(
      merge({a: 1, b: 1}, {a: 2, b: 2, c: 2}),
      {a: 2, b: 2, c: 2}
    );

    const obj = {
      a: 'a',
      b: 30,
    };
    assert.deepStrictEqual(merge(obj), obj);
    assert.deepStrictEqual(merge(), {});
  });
  it("Mimic the Object.assign() function with spread (right to left)", function () {
    function mergeRight(...objects) {
      return objects.reduceRight((accumulator, item) => ({...accumulator, ...item}), {})
    }

    assert.deepStrictEqual(
      mergeRight({a: 1, b: 1}, {a: 2, b: 2, c: 2}), {a: 1, b: 1, c: 2}
    );

    const obj = {
      a: 'a',
      b: 30,
    };
    assert.deepStrictEqual(mergeRight(obj), obj);
    assert.deepStrictEqual(mergeRight(), {});
  });

  describe("POC - cloning objects", () => {

    it("object spread - copies own,enumebrable,symbols", function () {

      var o = demoObject();
      var c = {
        ...o
      };
      assert(c !== o);

      assert(c.enumerable === 1);
      assert(c[s] === 1);

      assert(c.nonenumerable === undefined);
      assert(c.inherited === undefined);

      // TODO: will call getters on o ?

    });
    it("Object.assign({}) - copies own,enumebrable,symbols", function () {

      var o = demoObject();
      var c = Object.assign({}, o); ///!!! {}
      assert(c !== o);

      assert(c.enumerable === 1);
      assert(c[s] === 1);

      assert(c.nonenumerable === undefined);
      assert(c.inherited === undefined);

      // TODO: add nex test prooving that setters are called on assign(o1,o2)

    });
    it("JSON.parse(JSON.stringify()) - copies own,enumebrable,symbols", function () {

      var o = demoObject();
      var c = JSON.parse(JSON.stringify(o));

      assert(c !== o);

      assert(c.enumerable === 1);

      assert(c[s] === undefined);
      assert(c.nonenumerable === undefined);
      assert(c.inherited === undefined);

      // TODO: will call getters on o ?

    });
  })

});