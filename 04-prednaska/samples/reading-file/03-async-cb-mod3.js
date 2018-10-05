const fs = require("fs");

function readFile(from, cb) {
  fs.readFile(from, cb);
}

function writeFile(to, data, cb) {
  fs.writeFile(to, data, cb);
}

function print(data) {
  //...	
  console.log("done", data);
}

sequence([
    (cb) => fs.readFile("README.md"),
    () => fs.writeFile("README.03.bak"),
    print
  ],
  (err, results) => {
    console.error(err);
  });

function sequence(steps, finalCallback) {
	steps.map(function(orig){
		return function(){
			orig.call(null,)
		}
	})	
}