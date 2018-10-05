let from = "README.md";
let to = "README.04.bak";

const fs = require("fs").promises;

fs.readFile(from)
    .then((data) => {
        return fs.writeFile(to, data);
    })
    .then(() => { 
        console.log("done");
    });


