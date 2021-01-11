const fn = require('./functions');
const path = require('path');

const filesPath = path.join(__dirname, '..', 'assets', 'legendas');

const arquivos = fn.readDirectory(filesPath);

console.log(arquivos);
