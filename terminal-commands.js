const fs = require('fs');

module.exports.ls = () => {
    fs.readdir('./', (err, files) => {
        const filesToString = files.reduce((acc,file) => {
            return `${acc} ${file} `;
        }, '');

        console.log(filesToString);
    });
};

module.exports.touch = (fileName, data='') => {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
};

module.exports.mkdir = (dirName) => {
    fs.mkdir(dirName, (err) => {
        if (err) throw err;
        console.log('The folder has been created!');
    });
};