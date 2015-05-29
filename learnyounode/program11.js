var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {

	res.writeHead(200, { 'content-type': 'text/plain' });

	var fileName = process.argv[3];

	var readStream = fs.createReadStream(fileName);

	readStream.on('open', function () {
		readStream.pipe(res);
	});

});
server.listen(process.argv[2])