const fs = require("fs");
const EventEmiter = require("events");

function Copier2(from ,to) {

    this._from = from;
    this._to = to;

    this.copy = function() {
        let wasErr;

        const stream = fs.createReadStream(this._from);
        stream.on("data", (chunk) => {
            try {
                fs.writeFileSync(this._to, chunk); //FIXME
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
    };
}

Copier2.prototype = Object.create(EventEmiter.prototype);
Copier2.prototype.constructor = EventEmiter;

module.exports = Copier2;