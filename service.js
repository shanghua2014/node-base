const http = require('http');
let service = http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hello wo cao')
});
service.listen(1337, '127.0.0.1');
console.log('服务器启动成功！');