var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/cacilds.txt');
var writable = fs.createWriteStream(__dirname + '/cacildscopy.txt');
var compressed = fs.createWriteStream(__dirname + '/cacilds.txt.gz');

var gzip = zlib.createGzip();
//Como o método pipe() retorna a própria stream de destino, se ela for duplex,
//o processo de piping pode continuar.
readable.pipe(writable);

readable.pipe(gzip).pipe(compressed);