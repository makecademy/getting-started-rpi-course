// Include
var rpio = require('rpio');

// GPIO
rpio.open(12, rpio.OUTPUT, rpio.LOW);

// Lop
while (true) {

    // On
    rpio.write(12, rpio.HIGH);
    rpio.sleep(1);

    // Off
    rpio.write(12, rpio.LOW);
    rpio.sleep(1);
}
