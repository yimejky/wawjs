const ObjectSequenceStream = require("../object/ObjectSequenceStream");
const source = new ObjectSequenceStream();
const hexTransform = require("./hexTransform");
const objectWriter = require("../writable/objectWriter");

source.pipe(hexTransform).pipe(objectWriter)