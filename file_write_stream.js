var fs = require('fs');
var grains = ['mąka', 'ryż', 'owies'];
var options = { encoding: 'utf8', flag: 'w'};
var fileWriteStream = fs.createWriteStream("grains.txt", options);
fileWriteStream.on("close", function() {
    console.log("Zamknięto plik.");
});
while (grains.length) {
    var data = grains.pop() + " ";
    fileWriteStream.write(data);
    console.log("Zapisano: %s", data);
}
fileWriteStream.end();
