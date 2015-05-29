 var fs = require('fs');
 var str = fs.readFileSync(process.argv[2], 'utf8');
 var content = str.split('\n');
 
 console.log(content == null ? 0 : content.length -1);
 