var fs = require('fs');
fs.stat('file_stats.js', function(err, stats) {
    if (!err) {
        console.log('stats: ' + JSON.stringify(stats, null, ' '));
        console.log(stats.isFile() ? "Jest plikiem" : "Nie jest plikiem");
        console.log(stats.isDirectory() ? "Jest folderem" : "Nie jest folderem");
        console.log(stats.isSocket() ? "Jest gniazdem" : "Nie jest gniazdem");
        stats.isDirectory();
        stats.isBlockDevice();
        stats.isCharacterDevice();
        // stats.isSymbolicLink(); // tylko lstat
        stats.isFIFO();
        stats.isSocket();
    }
});
