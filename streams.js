var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/cacilds.txt', 
               {encoding: 'utf-8', highWaterMark: 8 * 1024});
var writable = fs.createWriteStream(__dirname + '/cacildscopy.txt');

readable.on('data', function(chunk) {
    console.log(chunk);
    writable.write(chunk);
});

