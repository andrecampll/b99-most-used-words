const fs = require('fs');
const path = require('path');

function readDirectoryFilesPath(mainPath) {
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

module.exports = {
  readDirectoryFilesPath,
}
