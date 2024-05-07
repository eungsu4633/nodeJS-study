const fs = require('fs').promises;

// read a file
fs.readFile('./text.txt', 'utf8') //
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

//write a file

fs.writeFile('./text.txt', 'hello,liam') //
    .catch((err) => {
        console.error(err);
    });
