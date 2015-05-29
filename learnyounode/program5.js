var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], function (err, dir_list) {
	if (err) { throw err; }
	dir_list.forEach(function (fileName) {
		if (path.extname(fileName) === "." + process.argv[3]) {
			console.log(fileName);
		}
	});
});