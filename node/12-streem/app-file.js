const fs = require('fs');

const beforeMem = process.memoryUsage().res;
fs.readFile('./file.txt', (_, data) => {
    fs.writeFile('./file2.txt', data, () => {});
});

console.log(beforeMem);
