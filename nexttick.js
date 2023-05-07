var fs = require("fs");
fs.stat("nexttick.js", function(err, stats){
    if (stats) {
        console.log("Plik nexttick.js istnieje");
    }
});
setImmediate(function () {
    console.log("wykonano natychmiastowy licznik czasu 1");
});
setImmediate(function () {
    console.log("wykonano natychmiastowy licznik czasu 2");
});
process.nextTick(function () {
    console.log("Wykonano następny znacznik 1");
});
process.nextTick(function () {
    console.log("wykonano następny znacznik 2");
});
