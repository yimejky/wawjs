const and = (fn, ...fns) => x => fns
  .reduce((r, fn) => r = r && !!fn(x), !!fn(x));

// TODO: reimplement using recursion
// and quick exit, avoid useles loop of whole array

module.exports = and;

//-------------------------- tests ----------------------------------------
process.env.SELF_TEST && ((and) => {
  console.error(`[self test]:${__filename}:...`)


  var assert = console.assert.bind(console);

  let composed = and(
    () => true,
    () => true
  );
  assert(typeof composed === "function");

  assert(composed() == true);


  assert(and(
    () => false,
    () => true
  )() === false);

  assert(and(
    (i) => i < 10,
    (i) => i < 5
  )(4) === true);

  assert(and(
    (i) => i < 10,
    (i) => i < 5
  )(12) === false)

  assert(and(
    () => false
  )() === false, "shell work with one arg");


  assert(and(
    () => "whatever"
  )() === true, "shell coerce");

  console.error(`[self test]:${__filename}:OK`)

})(module.exports);