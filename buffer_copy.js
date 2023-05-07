var alphabet = new Buffer('abcdefghijklmnoprstuvwxyz');
console.log(alphabet.toString());
//kopiowanie pełnego bufora
var blank = new Buffer(26);
blank.fill();
console.log("Puste: " + blank.toString());
alphabet.copy(blank);
console.log("Puste: " + blank.toString());
//kopiowanie częsci bufora
var dashes = new Buffer(26);
dashes.fill('-');
console.log("Kreski: " + dashes.toString());
alphabet.copy(dashes, 10, 10, 15);
console.log("Kreski: " + dashes.toString());
//kopiowanie do/z bezpośrednich indeksów buforów
var dots = new Buffer('-------------------------');
dots.fill('.');
console.log("kropki: " + dots.toString());
for (var i = 0; i < dots.length; i++) {
    if (i % 2) { dots[i] = alphabet[i]; }
}
console.log("kropki: " + dots.toString());
