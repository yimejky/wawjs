'use strict'
const assert = require("assert");
describe("exploratory test for object manipolations", function() {

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
    let p = { inherited: 1 };

    let o = Object.create(p, {
      nonenumerable: { enumerable: false, value: 1 },
      enumerable: { enumerable: true, value: 1 },
        [s]: { enumerable: true, value: 1 },
      nested: { enumebrable: true, value: { n: 1 } }
    });
    assert(o.enumerable === 1);
    assert(o.nonenumerable === 1);
    assert(o[s] === 1);
    assert(o.inherited === 1);
    assert(o.nested.n === 1);
    return o;
  }

  it.skip("TODO:Object.assign() triggers setters whereas spread syntax doesn't", function() {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals
    // TODO: test prooving this statement

  });
  it.skip("TODO:Mimic the Object.assign() function with spread", function() {

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals
    

    function merge(...objects) {
      //TODO
    }
    assert.deepStrictEqual(
      merge({ a: 1, b: 1 }, { a: 2, b: 2, c: 2 }), { a: 2, b: 2, c: 2 }
    );
    
    // TODO: add more tests
  })
  it.skip("TODO: Mimic the Object.assign() function with spread (right to left)", function() {

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals
    
    function mergeRight(...objects) {
      //TODO:
    }
    
    assert.deepStrictEqual(
      mergeRight({ a: 1, b: 1 }, { a: 2, b: 2, c: 2 }), { a: 1, b: 1, c: 2 }
    );
    // TODO: add more tests
  })


  describe("POC - cloning objects", () => {

    it("object spread - copies own,enumebrable,symbols", function() {

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
    it("Object.assign({}) - copies own,enumebrable,symbols", function() {

      var o = demoObject();
      var c = Object.assign({}, o); ///!!! {}
      assert(c !== o);

      assert(c.enumerable === 1);
      assert(c[s] === 1);

      assert(c.nonenumerable === undefined);
      assert(c.inherited === undefined);

      // TODO: add nex test prooving that setters are called on assign(o1,o2)

    });
    it("JSON.parse(JSON.stringify()) - copies own,enumebrable,symbols", function() {

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