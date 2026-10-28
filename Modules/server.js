const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function (req, res) {

    var pathname = url.parse(req.url).pathname;

    console.log("Request for " + pathname + " received");

    fs.readFile(pathname.substr(1), function (err, data) {

        if (err) {
            console.log(err);

            res.writeHead(404, {
                'Content-Type': 'text/html'
            });

            res.write("404 File Not Found");

        } else {

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            res.write(data.toString());
        }

        res.end();
    });

}).listen(8081);

console.log("Server running at http://localhost:8081/");