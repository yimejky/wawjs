function addClass( /*DomNode|String*/ node, /*String|Array*/ classStr) {
    node = dom.byId(node);
    classStr = str2array(classStr);
    //...
    //...
}

//
function byId(id, doc) {
    return (typeof id == "string") ?
        document.getElementById(id) :
        id;
};

function str2array(s) {
    // split by spaces
    //....
}