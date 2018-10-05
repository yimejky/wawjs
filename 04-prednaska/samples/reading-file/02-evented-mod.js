let from = "README.md";
let to = "README.02m.bak";

const fs = require("fs");
const EventEmiter = require("events");

class Copier extends EventEmiter {
  
  constructor(from, to) {
    super();
    this._from = from;
    this._to = to;
  }
  copy() {

    let wasErr;

    const stream = fs.createReadStream(this._from);
    stream.on("data", (chunk) => {
      try {
        fs.appendFileSync(this._to, chunk);
      } catch (err) {
        wasErr = true;
        this.emit("error", err);
      }
    });
    stream.on("close", () => {
      !wasErr && this.emit("finish", {
        from: this._from,
        to: this._to
      });
    });
    stream.on("error", (err) => {
      this.emit("error", err);
    });
  }
}


// let's say we want this API

const copier = new Copier(from, to);
copier
  .on("finish", (data) =>
    console.error("finished", data))
  .on("error", (err) =>
    console.error("error:", err))

copier.copy();




console.log("end-main");