const { isRegExp } = require("util").types;

match("something", /^[a-z]$/);
match("something", (o) => o.length < 100);

function match(str, matcher) {
    if (isRegExp(matcher))
        return matcher.test(str);
    else
        return matcher.call(null, str);
}

// real world sample:
// assert.throws(fn[, error][, message])
// - error error <RegExp> | <Function> | <Object> | <Error>
