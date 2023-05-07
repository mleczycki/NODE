var fs = require('fs');
var fruitBowl = ['jabłko', 'pomarańcza', 'banan', 'winogrona'];
function writeFruit(fd) {
    if (fruitBowl.length) {
        var fruit = fruitBowl.pop() + " ";
        fs.write(fd, fruit, null, null, function(err, bytes) {
            if (err) {
                console.log("Zapis do pliku nie powiódł się");
            } else {
                console.log("Zapisano: %s %d bajtów", fruit, bytes);
                writeFruit(fd);
            }
        });
    } else {
        fs.close(fd);
    }
}
fs.open('fruit.txt', 'w', function(err, fd){
    writeFruit(fd);
});
