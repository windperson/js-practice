var func =
	function myLs(lspath, ext, callback) {
		var fs = require('fs');
		var path = require('path');
		fs.readdir(lspath, function(err, dir_list) {
			if (err) { return callback(err); }
			var data = [];
			dir_list.forEach(function(fileName) {
				if (path.extname(fileName) === "." + ext) {
					data.push(fileName);
				}
			});
			callback(null, data);
		});
	};

module.exports = func;