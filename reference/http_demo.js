const http = require('http');

http.createServer((req, res) => {
    res.write('Hello');
    res.end();
}).listen(8080, () => console.log('Server is running!'));