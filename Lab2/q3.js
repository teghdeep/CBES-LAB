var http = require("http");
var app = require('./server');

let server2 = function () {
    http.createServer(app.server).listen(8080);
}

server2();