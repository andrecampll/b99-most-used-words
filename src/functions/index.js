const fs = require('fs');
const path = require('path');

function readDirectory(filePath) {
  let files = fs.readdirSync(filePath);

  return files.map(file => path.join(filePath, file));
}

module.exports = {
  readDirectory,
}
