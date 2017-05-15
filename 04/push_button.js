// Include
var rpio = require('rpio');

// Button
rpio.open(7, rpio.INPUT);

// LED
rpio.open(5, rpio.OUTPUT, rpio.LOW);
ledState = false;

// Switch detection
function switchButton(pin) {

    // Read button
    var state = rpio.read(pin);

    // Invert state if pressed
    if (state == true) {

    	// Invert
        ledState = !ledState;

        // Apply
        if (ledState == true) {
            rpio.write(5, rpio.HIGH);
        } else {
            rpio.write(5, rpio.LOW);
        }
    }

}

rpio.poll(7, switchButton);
