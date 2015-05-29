var http = require('http');

var temp = [];

http.get(process.argv[2],function(res){
	res.setEncoding('utf8');
	res.on('data', function(data){
		temp.push(data);
	});
	res.on('end', function(data){
		var str = temp.join('');
		console.log(str.length);
		console.log(str);
	});
});