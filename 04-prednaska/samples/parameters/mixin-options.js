
print("test")
print("test", { ucase: false });
print("test", { ucase: false, color: "#00FF00" });

// V1
function print(str, options) {
    // mutated assign
    options = Object.assign({
        // defaults
        color: "#FFFFFF",
        ucase: true
    }, options);
    //...
}
// V2
var defaultOptions = {
    // defaults
    color: "#FFFFFF",
    ucase: true
};
function print(str, options) {
    // assign to new ovject, 
    options = Object.assign({}, defaultOptions, options);
    //...
}

// V3: ANTISAMPLE:
function print(str, options) {
    // BAD: mutating defaultOptions with options
    // will use broken options with subsequent call
    options = Object.assign(defaultOptions, options);
    //...
}


