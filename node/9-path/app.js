const path = require('path');
const fs = require('fs');

try {
    fs.renameSync('./text.txt', './newtext.txt');
} catch (err) {
    console.error(err);
}

fs.rename('./newtext.txt', 'text.txt', (err) => {
    console.error(err);
});

try {
    fs.mkdirSync('./test', () => {
        console.log('succees');
    });
} catch (err) {
    console.error(err);
}

// console.log(path.sep);
// console.log(path.delimiter);
// console.log(__dirname);
// console.log(__filename);
// console.log(path.basename(__dirname));
// console.log(path.basename(__filename));
// console.log(path.basename(__filename, '.js'));
console.log(path.join(__filename, 'img'));
// console.log(path.join(__dirname, 'img'));
