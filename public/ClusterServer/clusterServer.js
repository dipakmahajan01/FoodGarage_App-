var http = require("http");
const totalCPUs = require("os").cpus().length;
var cluster = require("cluster");


if (cluster.isMaster) {
    for (var i = 0 ; i < totalCPUs; i++) {
        cluster.fork();
    }
} else {
    var server = http.createServer((req, res) => {
        console.log(process.pid)
        res.end(`hello from server ${process.pid} `);
    });
    
    server.listen(8081, () => {
        console.log("Server is listing at 8081 and processer" + process.pid);
    })
}


