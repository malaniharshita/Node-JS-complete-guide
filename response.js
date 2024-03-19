const http = require('http');

const server = http.createServer((req,res) => {
    //1st task---
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<html>');
    // res.write('<head><title>My First Page</title></head>')
    // res.write('<body>Welcome to my Node Js Project</body>')
    // res.write('</html>');
    // res.end();

    //2nd task ---
    switch(req.url){
        case "/home":
            res.end('Welcome home');
        case "/about":
            res.end('Welcome to About Us page');
        case "/node":
            res.end('Welcome to my Node Js project');
        default:
            res.end('404 not found');
    }
})

server.listen(3000);