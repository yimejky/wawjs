let from = "README.md";
let to = "README.03.bak";

const fs = require("fs");

fs.readFile(from, (err, data) => {
  if (err) { /* */ ; return; }
  fs.writeFile(to, data, (err) => {
    if (err) { /* */ return; }


    console.log("done");

  });
});

fs.readFile(from, step1(step2(step3)));

function step1(data) {
  
}

function print(data) {
  console.log("done");
}

