var fs = require('fs');
var options = { encoding: 'utf8', flag: 'r' };
var fileReadStream = fs.createReadStream("grains.txt", options);
fileReadStream.on('data', function(chunk) {
    console.log('Zboża: %s', chunk);
    console.log('Wczytano %d bajtów danych.', chunk.length);
});
fileReadStream.on("close", function() {
    console.log("Zamknięto plik.");
});
