const fn = require('./functions');
const path = require('path');

const mainPath = path.join(__dirname, '..', 'assets', 'legendas');

fn.readDirectoryFiles(mainPath)
  .then((files) => fn.elementsEndingWith(files, 'srt'))
  .then((SRTfiles) => fn.readFiles(SRTfiles))
  .then(console.log);
