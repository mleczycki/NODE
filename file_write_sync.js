var fs = require('fs');
var veggieTray = ['marchewka', 'seler', 'oliwki'];
fd = fs.openSync('veggie.txt', 'w');
while (veggieTray.length) {
    veggie = veggieTray.pop() + " ";
    var bytes = fs.writeSync(fd, veggie, null, null);
    console.log("Zapisano: %s %d bajtów", veggie, bytes);
}
fs.closeSync(fd);
