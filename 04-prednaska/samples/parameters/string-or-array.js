function isOneOf(real, expected) {
    Array.isArray(expected) || (expected = [expected]);
    return expected.some((expected) => Object.is(real, expected));
}

console.log(
    isOneOf(10, 10),
    isOneOf(10, [10, 20, 30]),
    isOneOf("bar", "foo")
);


function isOneOf(real, expected, ...others) {
    expected = [].concat(expected, ...others);
    return expected.some((expected) => Object.is(real, expected));
}

console.log(
    isOneOf(10, 10),
    isOneOf(10, [10, 20, 30]),
    isOneOf(10, 10, 20, 30),
    isOneOf("bar", "foo"),
    isOneOf("bar", "foo", ["bar", "var"])
);


// string.split(",")




