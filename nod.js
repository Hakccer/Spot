
const http = require("http");

const hostname = '127.0.0.1';
const port = 3000;

const a = require("fs");
const tx = a.readFileSync("imp.txt", "utf-8");

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end(tx);
})

server.listen(port,hostname,() => {
    console.log(`Tanishq Prajapati Server is Running At:\nhttp://${hostname}:${port}/`);
})