const fn = require('./functions');
const path = require('path');
const symbols = require('./constants');


const mainPath = path.join(__dirname, '..', 'assets', 'legendas');

function agroupElementsAndCount(words) {
  return Object.values(words.reduce((group, word) => {
    const wordLowerCase = word.toLowerCase();

    const quantity = group[wordLowerCase] ?
      group[wordLowerCase].quantity + 1 : 1;

    group[wordLowerCase] = {
      element: wordLowerCase,
      quantity,
    }

    return group;
  }, {}));
}

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
  .then(agroupElementsAndCount)
  .then(console.log);
