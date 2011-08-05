var http = require('http');

var server = http.createServer(function(req, res) {
	res.writeHeader(200, {"Content-Type": "text/plain"});
	res.end("Hello World!");
});

server.listen(5000, function(){
	var addr = server.address();
	console.log("Server is listening on: " + addr.address + ":" + addr.port);
});
