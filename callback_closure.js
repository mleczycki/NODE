function logCar(logMsg, callback) {
    process.nextTick(function() {
        callback(logMsg);
    });
}
var cars = ["Ferrari", "Porsche", "Bugatti"];
for (var idx in cars) {
    var message = "Widziano samochód " + cars[idx];
    logCar(message, function() {
        console.log("Normalne wywołanie zwrotne: " + message);
    });
}
for (var idx in cars) {
    var message = "Widziano samochód " + cars[idx];
    (function(msg) {
        logCar(msg, function() {
            console.log("Wywołanie zwrotne z domknięciem: " + msg);
        });
    })(message);
}
