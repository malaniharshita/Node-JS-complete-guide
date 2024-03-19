const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body>');
        res.write('<form action = "/message" method = "POST">');
        res.write('<input type = "text" name = "message">');
        res.write('<button type = "submit">Submit</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
    if(url === '/message' && method === 'POST'){
        fs.writeFileSync('message.txt','dummy');
        res.statusCode = 302;
        res.setHeader('Location' , '/');
        res.end();
    }
})

server.listen(3000);