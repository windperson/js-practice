var net = require('net');
var server = net.createServer(function (socket) {
	// socket handling logic
	var date = new Date();
	var data = date.getFullYear() + "-" + ("00" + (date.getMonth()+1)).slice(-2) + "-" + ("00" + date.getDate()).slice(-2) +
		" " + ("00" + date.getHours()).slice(2) + ":" + ("00" + date.getMinutes()).slice(-2); 
	socket.end(data);
});
server.listen(process.argv[2]);