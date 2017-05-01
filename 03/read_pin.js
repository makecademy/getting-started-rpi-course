// Include
var rpio = require('rpio');

// GPIO
rpio.open(12, rpio.INPUT);

// Loop
while (true) {

	var readout = rpio.read(12);
    console.log('Pin 12 is currently set to ' + readout);
    rpio.sleep(1);
}
