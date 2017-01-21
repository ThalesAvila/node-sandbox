var fs = require('fs');

//Modo assíncrono de leitura de arquivo
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf-8');
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf-8', function(err, data) {
        console.log(data);
});
console.log('Done!');
console.log(greet);