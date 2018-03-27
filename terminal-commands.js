const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const fileToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(fileToString);
  });
};
