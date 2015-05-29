var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {
	if (req.method == 'GET') {
		var parseObj = url.parse(req.url, true);
		if (parseObj && parseObj.pathname == '/api/parsetime') {
			res.writeHead(200, { 'Content-Type': 'application/json' });
			var timeStr = parseObj.query['iso'];
			var date = new Date(timeStr);
			var result = "{ \"hour\":" + date.getHours() + ",\"minute\":" + date.getMinutes() + ",\"second\":" + date.getSeconds() + "}";
			res.end(result);
		}
		else if (parseObj && parseObj.pathname == '/api/unixtime') {
			res.writeHead(200, { 'Content-Type': 'application/json' });
			var timeStr = parseObj.query['iso'];
			var now = new Date(timeStr);
			var utc_unixtime = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
				now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
			res.end("{\"unixtime\":" + utc_unixtime + "}");
		}
	}

});
server.listen(process.argv[2])