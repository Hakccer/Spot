const http = require('http');
const f = require('fs');
const { serve } = require('esbuild');

const hostname = '127.0.0.1';
const port = 3000;

const h = f.readFileSync('home.html');
const a = f.readFileSync('about.html');
const c = f.readFileSync('contact.html');
const p = f.readFileSync('product.html');

const server = http.createServer((req,res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.writeHead(res.statusCode,{'Content-type':'text/html'});
    if (req.url == "/") {
        res.end(h)
    }
    else if (req.url == "/about") {
        res.end(a)
    }
    else if (req.url == "/contact") {
        res.end(c)
    }
    else if (req.url == "/product") {
        res.end(p)
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 Not Found</h1>")
    }
});

server.listen(port,hostname,() =>{
    console.log(`Server is Now Active And Can Find at\n
    http://${hostname}:${port}/`);
})