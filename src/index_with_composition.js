const fn = require('./functions');
const path = require('path');
const symbols = require('./constants');

const mainPath = path.join(__dirname, '..', 'assets', 'legendas');

function composition(...fns) {
  return function(value) {
    return fns.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc);
      } else {
        return fn(acc);
      }
    }, value);
  }
}

const processSubtitles = composition(
  fn.readDirectoryFiles,
  fn.elementsEndingWith('srt'),
  fn.readFiles,
  fn.mergeElements,
  fn.separeteTextBy('\n'),
  fn.removeEmpties,
  fn.removeIfIncludes('-->'),
  fn.removeIfOnlyNumber,
  fn.removeSymbols(symbols),
  fn.mergeElements,
  fn.separeteTextBy(' '),
  fn.removeEmpties,
  fn.removeIfOnlyNumber,
  fn.agroupElementsAndCount,
  fn.orderByNumericAttribute('quantity', 'desc'),
);

processSubtitles(mainPath).then(console.log);
