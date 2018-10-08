let from = "foobar";
let to = "README.02.bak";

const fs = require("fs");

const stream = fs.createReadStream(from,{fd:999});

stream.on("data", (chunk) => {
    fs.appendFileSync(to, chunk);
});
stream.on("end", () => {
     console.log("done");
});



