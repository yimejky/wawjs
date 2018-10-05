let from = "/README.md";
let to = "README.04.bak";

const fs = require("fs").promises;

fs.readFile(from)
  .then((data) => {
    return fs.writeFile(to, data);
  }, (err) => {
    console.error("read failed");
  })
  .then(() => {
    console.log("done");
  }, (err) => {
    throw new Error("write failed");
  })
  .catch((err) => {
    console.log("err", err);
  })
  .finally(() => {
    console.log("finally");
  });

console.log("main.end");