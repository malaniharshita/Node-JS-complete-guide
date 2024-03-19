const http = require('http');

const port=4000;
const name = 'harshita'
//const hostname = localhost;
const server = http.createServer((req,res) => {
    console.log(name);
    res.end(name);
    process.exit();
});

server.listen(port);
    