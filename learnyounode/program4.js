var fs = require('fs');
fs.readFile(process.argv[2],function(err,data){
	 if(err){
		 throw err;
	 }
	 var content = data.toString().split('\n');
	 console.log(content.length -1);
 });