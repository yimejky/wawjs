let from = "README.md";
let to = "README.01.bak";

const fs = require("fs");

let data = fs.readFileSync(from);
fs.writeFileSync(to, data);

console.log("done");


