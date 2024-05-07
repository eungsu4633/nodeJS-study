const fs = require('fs');

const writeStream = fs.createWriteStream('./file3.txt');
writeStream.on('finish', () => {
    console.log('finished');
});

// console.clear();
console.log(writeStream);
