const bom = require("../../src/bom/");
const assert = require("assert");
const fs = require("fs");

describe("bom.js tests", function() {

  const bomBuffer = Buffer.from([0xEF, 0xBB, 0xBF])

  // 3. define first test
  it("remove bom - shell remove bom from file", function(done) {

    // collect all chunks, for asserts
    const chunks = [];

    // 4. create sample files
    let file = `${__dirname}/data/with-bom.txt`;
    fs.createReadStream(file)
      .pipe(bom.remove())
      .on("error", done)
      .on("data", (chunk) => chunks.push(chunk))
      .on("finish", () => {

        let chunk = Buffer.concat(chunks);

        assert(Buffer.isBuffer(chunk));
        assert.equal(chunk.indexOf(bomBuffer), -1);
        assert.equal(chunk[0], 0x2f);
        assert.equal(chunk.length, 7); //only data
        done();
      })
  });

  it("remove bom - shell remove bom from empty file", function(done) {

    const chunks = [];

    let file = `${__dirname}/data/without-bom-empty.txt`;
    fs.createReadStream(file)
      .pipe(bom.remove())
      .on("error", done)
      .on("data", (chunk) => chunks.push(chunk))
      .on("finish", () => {

        let chunk = Buffer.concat(chunks);

        assert.equal(chunk.indexOf(bomBuffer), -1);
        assert.equal(chunk.length, 0);

        done();
      });
  });


  it("remove bom - shell remove bom from file without bom", (done) => {

    const chunks = [];

    let file = `${__dirname}/data/without-bom.txt`;
    fs.createReadStream(file)
      .pipe(bom.remove())
      .on("error", done)
      .on("data", (chunk) => chunks.push(chunk))
      .on("finish", () => {

        let chunk = Buffer.concat(chunks);

        fs.readFile(file, (err, data) => {
          assert(
            chunk.equals(data),
            `unexpected \n${JSON.stringify(chunk)}`
          );
          done();
        });

      });
  });

  it("remove bom - shell work with arbitrary chunks sizes", (done) => {

    const chunks = [];

    let file = `${__dirname}/data/with-bom.txt`;
    fs.createReadStream(file, { highWaterMark: 2 })
      .pipe(bom.remove())
      .on("error", done)
      .on("data", (chunk) => chunks.push(chunk))
      .on("finish", () => {

        let chunk = Buffer.concat(chunks);

        fs.readFile(file, (err, data) => {
          assert(
            chunk.equals(data.slice(3)),
            `unexpected \n${JSON.stringify(chunk)}`
          );
          done();
        });
      });
  });
});
