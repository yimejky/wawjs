const { LineStream } = require('byline');
const toJson = require("./toJson.js");

/*
	du -a |
	node samples/node-js-streams/process.js |
	grep 'node_modules'
*/

process.stdin
    .pipe(new LineStream({ encoding: "utf8" }))
    .pipe(toJson)
    .pipe(process.stdout);
    