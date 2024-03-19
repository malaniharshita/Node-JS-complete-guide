const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    const body = [];

    if(url === '/'){
        fs.readFile("messages.txt", {encoding: "utf-8"}, (err,data) => {
            if(err){
                console.log(err);
            }
            console.log('data from file');
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write(`<body>${data}</body>`);
            res.write(
                '<body><form action = "/message" method = "POST"><input type = "text" name = "message"><button type = "submit">Submit</button></body>'
            )
            res.write('</html>')
            return res.end();
        })
    } 
    else if(url === "/message" && method === 'POST'){
        req.on("data", (chunks) => {
            body.push(chunks); //array
        });

        return req.on("end", ()=>{
            const parseBody = Buffer.concat(body).toString();
            //console.log('parseBody>>>>',parseBody);
            const message = parseBody.split("=")[1];
            fs.writeFile('messages.txt',message, (err) => {
                if(err){
                    console.log(err);
                }
                console.log('inside fs.writeFile');
                res.statusCode = 302;
                res.setHeader('location', '/');
                return res.end();
            })
        })
    }  
    else{
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><h1>Hello from Node Js</h1></body>');
        res.write('</html>')
        res.end();
    }
        
});

server.listen(3000);


