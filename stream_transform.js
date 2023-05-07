var stream = require('stream');
var util = require('util');
util.inherits(JSONObjectStream, stream.Transform);
function JSONObjectStream (opt) {
    stream.Transform.call(this, opt);
};
JSONObjectStream.prototype._transform = function (data, encoding, callback) {
    object = data ? JSON.parse(data.toString()) : "";
    this.emit("object", object);
    object.handled = true;
    this.push(JSON.stringify(object));
    callback();
};
JSONObjectStream.prototype._flush = function (cb) {
    cb();
};
var tc = new JSONObjectStream();
tc.on("object", function (object) {
    console.log("Nazwa: %s", object.name);
    console.log("Kolor: %s", object.color);
});
tc.on("data", function(data){
    console.log("Dane: %s", data.toString());
});
tc.write('{"name":"Carolinus", "color": "Zielony"}');
tc.write('{"name":"Solarius", "color": "Niebieski"}');
tc.write('{"name":"Lo Tae Zhao", "color": "Złoty"}');
tc.write('{"name":"Ommadon", "color": "Czerwony"}');
