const fs = require('fs');
const path = require('path');

/*fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if(err) throw err;
    console.log('Folder created');
});*/

// Create and write to a new file
/*
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world!', err => {
    if(err) throw err;
    console.log('File created and written to');

    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love Node.js', err => {
        if(err) throw err;
        console.log('File created and written to');
    });
});*/

/*
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
*/

fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello-world.txt'), (err) => {
    if (err) throw err;
    console.log("Renamed...");
});
