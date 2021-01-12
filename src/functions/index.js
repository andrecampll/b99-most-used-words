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

function elementsEndingWith(array, pattern) {
  return array.filter((element) => element.endsWith(pattern))
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

module.exports = {
  readDirectoryFiles,
  elementsEndingWith,
  readFile,
  readFiles,
}
