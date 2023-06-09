var stream = require('stream');
var util = require('util');
util.inherits(Duplexer, stream.Duplex);
function Duplexer(opt) {
    stream.Duplex.call(this, opt);
    this.data = [];
}
Duplexer.prototype._read = function readItem(size) {
    var chunk = this.data.shift();
    if (chunk == "stop") {
        this.push(null);
    } else {
        if (chunk) {
            this.push(chunk);
        } else {
            setTimeout(readItem.bind(this), 500, size);
        }
    }
};
Duplexer.prototype._write = function(data, encoding, callback) {
    this.data.push(data);
    callback();
};
var d = new Duplexer();
d.on('data', function(chunk) {
    console.log('Wczytano: ', chunk.toString());
});
d.on('end', function() {
    console.log('Cały komunikat');
});
d.write("Myślę, ");
d.write("więc ");
d.write("jestem.");
d.write("Rene Descartes");
d.write("stop");
