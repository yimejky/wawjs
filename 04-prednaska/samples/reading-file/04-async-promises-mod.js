let from = "README.md";
let to = "README.04.bak";

const fs = require("fs").promises;

copy(from, to)
  .then(
    () => console.log("done"),
    () => console.log("error")
  )

function copy(from, to) {
  return fs.readFileSync(from)
    .then((data) => fs.writeFileSync(to, data))

}

