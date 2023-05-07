var stream = require('stream');
var util = require('util');
util.inherits(Answers, stream.Readable);
function Answers(opt) {
    stream.Readable.call(this, opt);
    this.quotes = ["tak", "nie", "może"];
    this._index = 0;
}
Answers.prototype._read = function() {
    if (this._index > this.quotes.length) {
        this.push(null);
    } else {
        this.push(this.quotes[this._index]);
        this._index += 1;
    }
};
var r = new Answers();
console.log("Bezpośredni odczyt: " + r.read().toString());
r.on('data', function(data) {
    console.log("Odczyt przez wywołanie zwrotne: " + data.toString());
});
r.on('end', function(data){
    console.log("Nie ma więcej odpowiedzi");
});
