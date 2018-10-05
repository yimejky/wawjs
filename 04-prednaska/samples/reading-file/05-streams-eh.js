

let from = "/README.md";
let to = "/README.05.bak";

const fs = require("fs");

const readable = fs.createReadStream(from);
const writable = fs.createWriteStream(to);

readable.on("error", (err) =>
  console.error("r.error", err)
);
writable.on("error", (err) =>
  console.error("w.error", err)
);

readable.pipe(writable)
  .on("finish", () => {
    console.log("done");
  });

console.log("main.end");

