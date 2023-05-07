buf256 = new Buffer(256);
buf256.fill(0);
buf256.write("dodaj tekst");
console.log(buf256.toString());
buf256.write("więcej tekstu", 6, 14);
console.log(buf256.toString());
buf256[20] = 43;
console.log(buf256.toString());
