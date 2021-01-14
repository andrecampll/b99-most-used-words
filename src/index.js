const fn = require('./functions');
const path = require('path');
const symbols = require('./constants');

const mainPath = path.join(__dirname, '..', 'assets', 'legendas');

fn.readDirectoryFiles(mainPath)
  .then((files) => fn.elementsEndingWith('srt')(files))
  .then((SRTfiles) => fn.readFiles(SRTfiles))
  .then(fn.mergeElements)
  .then(fn.separeteTextBy('\n'))
  .then(fn.removeEmpties)
  .then((lines) => fn.removeIfIncludes('-->')(lines))
  .then(fn.removeIfOnlyNumber)
  .then((lines) => fn.removeSymbols(symbols)(lines))
  .then(fn.mergeElements)
  .then(fn.separeteTextBy(' '))
  .then(fn.removeEmpties)
  .then(fn.removeIfOnlyNumber)
  .then(fn.agroupElementsAndCount)
  .then(fn.orderByNumericAttribute('quantity', 'desc'))
  .then(console.log);
