var fs = require('fs');
var options = {encoding: 'utf8', flag: 'r'};
fs.readFile('config.txt', options, function(err, data) {
    if (err) {
        console.log("Nie powiodło się otwarcie pliku konfiguracyjnego");
    } else {
        console.log("Załadowano plik konfiguracyjny.");
        var config = JSON.parse(data);
        console.log("Maksymalna liczba plików: " + config.maxFiles);
        console.log("Maksymalna liczba połączeń: " + config.maxConnectinos);
        console.log("Ścieżka głównego katalogu: " + config.rootPath);
    }
});
