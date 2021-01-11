const fn = require('./functions');
const path = require('path');

const mainPath = path.join(__dirname, '..', 'assets', 'legendas');

fn.readDirectoryFilesPath(mainPath)
  .then(console.log);
