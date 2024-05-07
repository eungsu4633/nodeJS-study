const fs = require('fs');

//3
// rename(...., callback(error, data))
// try {renameSync(....)} catch(error)
// promises.rename().then().catch(0)

try {
    fs.renameSync('./text.txt', './text-new.txt');
} catch (error) {
    console.error(error);
}

fs.rename('text-new.txt', 'text.txt', (err) => {
    if (err) {
        console.error('message:', err);
    } else {
        console.log('success');
    }
});

fs.promises
    .rename('text2.txt', 'newtext.txt')
    .then(() => {
        console.log('done');
    })
    .catch((err) => {
        console.error(err);
    });
