let from = "README.md";
let to = "README.01.bak";

const fs = require("fs");

// with error handling
try {
    let data = fs.readFileSync(from);
    fs.writeFileSync(to, data);
} catch (err) {
    /*...*/
} finally {
    /*...*/
}


// modularization
function copy(from, to) {
    let data = fs.readFileSync(from);
    fs.writeFileSync(to, data);
}




console.log("done");