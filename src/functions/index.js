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

module.exports = {
  readDirectoryFiles,
  elementsEndingWith,
}
