const http = require('http');
const routes = require('./ques10routes');

const server = http.createServer(routes);
console.log('hello');
server.listen(4000);