const fs = require('fs');
const path = require('path');

function readDirectoryFiles(mainPath) {
  return new Promise((resolve, reject) => {
    try {
      const filesPath = fs.readdirSync(mainPath);

      const joinedPaths = filesPath.map(
        filePath => path.join(mainPath, filePath)
      );

      resolve(joinedPaths);
    } catch (err) {
      reject(err);
    }
  });
}

function elementsEndingWith(textualPattern ) {
  return function(array) {
    return array.filter((element) => element.endsWith(textualPattern))
  }
}

function readFile(path) {
  return new Promise((resolve, reject) => {
    try {
      const content = fs.readFileSync(path, { encoding: 'utf-8' });

      resolve(content.toString());
    } catch (error) {
      reject(error);
    }
  });
}

function readFiles(paths) {
  return Promise.all(paths.map((path) => readFile(path)))
}

function removeEmpties(array) {
  return array.filter((element) => element.trim())
}

function removeIfIncludes(textualPattern) {
  return function (array) {
    return array.filter((element) => !element.includes(textualPattern))
  }
}

function removeIfOnlyNumber(array) {
  return array.filter((element) => {
    const number = parseInt(element.trim());

    return number !== number;
  });
}

module.exports = {
  readDirectoryFiles,
  elementsEndingWith,
  readFile,
  readFiles,
  removeEmpties,
  removeIfIncludes,
  removeIfOnlyNumber,
}
