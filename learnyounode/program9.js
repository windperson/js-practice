var http = require('http');

function myCollect(url, seq, callback) {
	http.get(url, function (res) {
		var temp = [];
		res.setEncoding('utf8');
		res.on('data', function (data) {
			temp.push(data);
		});
		res.on('end', function (data) {
			var str = temp.join('');
			callback(str, seq);
		});
	});
}

var result = [];

var resultFunc = function (data, seq) {
	result[seq] = data;
	if (result[0] && result[1] && result[2]) {
		//print result
		result.forEach(function (item) {
			console.log(item);
		});
	}
};

myCollect(process.argv[2], 0, resultFunc);
myCollect(process.argv[3], 1, resultFunc);
myCollect(process.argv[4], 2, resultFunc);