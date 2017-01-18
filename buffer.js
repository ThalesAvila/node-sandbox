var buffer = new Buffer('Hello');

console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());

buffer.write('wo');

console.log(buffer.toString());