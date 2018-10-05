

let from = "README.md";
let to = "README.05.bak";

const fs = require("fs");

const readable = fs.createReadStream(from);
const writable = fs.createWriteStream(to);

readable.pipe(writable)
  .on("finish", () => {
    console.log("done");
  });

console.log("main.end");

