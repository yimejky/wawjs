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

