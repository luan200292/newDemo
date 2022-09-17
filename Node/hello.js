const http = require('http');
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello World');

    // res.setHeader("Content-Type","application/json");
    // res.end(' { "message" : "Hello World" }');

    // res.setHeader("Content-Type","text/html");
    // res.end(
    //     "<h3>Hello World</h3><p>This is a HTML response</p><ol><li>One</li><li>Two</li><li>Three</li></ol>"
    // );
    let homepage = "/home";
    let aboutpage = "/about";
    res.setHeader("Content-Type","text/html");
    switch (req.url){
        case homepage:
            res.writeHead(200);
            res.end("<h1>This is Homepage</h1>");
            break;
        case aboutpage:
            res.writeHead(200);
            res.end("<h1>This is About page</h1>");
            break;
        default:
            break;

    }
});

server.listen(port, hostname, () => {
    console.log('Sevrer running at http://${hostname}:${port}/');
});