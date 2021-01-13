const fn = require('./functions');
const path = require('path');

const mainPath = path.join(__dirname, '..', 'assets', 'legendas');

fn.readDirectoryFiles(mainPath)
  .then((files) => fn.elementsEndingWith('srt')(files))
  .then((SRTfiles) => fn.readFiles(SRTfiles))
  .then((contents) => contents.join('\n'))
  .then((allContent) => allContent.split('\n'))
  .then(fn.removeEmpties)
  .then((lines) => fn.removeIfIncludes('-->')(lines))
  .then(fn.removeIfOnlyNumber)
  .then(console.log);
