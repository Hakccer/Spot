const htt = require('http');
const f = require('fs');
const content = f.readFileSync('spotify.html');

const hostname = '127.0.0.1';
const port = 3000;

const server = htt.createServer((req,res) => {
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(content);
});

server.listen(port,hostname,function (params) {
    console.log(`Tanishq Prajapati's Server Started at\n
    http://${hostname}:${port}/`);    
})