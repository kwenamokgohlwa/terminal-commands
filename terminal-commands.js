const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const fileToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(fileToString);
  });
};

module.exports.touch = (fileName) => {
  fs.writeFile(fileName, '', (err) => {
    if (err) {
      return console.log(`You have an error:  ${err}`);
    }

    console.log('File created');
  });
};

module.exports.mkdir = (dir) => {
  fs.mkdir(dir, (err) => {
    if (err) {
      return console.log(`You have an error:  ${err}`);
    }

    console.log('Folder created');
  });
};
