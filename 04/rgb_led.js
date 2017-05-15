// Package
var rpio = require('rpio');

// Pins
var bluePin = 7;
var redPin = 3;
var greenPin = 5;

// Set as outputs
rpio.open(bluePin, rpio.OUTPUT, rpio.LOW);
rpio.open(redPin, rpio.OUTPUT, rpio.LOW);
rpio.open(greenPin, rpio.OUTPUT, rpio.LOW);

// Function
function setLed(red, blue, green) {

    if (red == true) {
        rpio.write(redPin, rpio.HIGH);
    } else {
        rpio.write(redPin, rpio.LOW);
    }
    if (blue == true) {
        rpio.write(bluePin, rpio.HIGH);
    } else {
        rpio.write(bluePin, rpio.LOW);
    }
    if (green == true) {
        rpio.write(greenPin, rpio.HIGH);
    } else {
        rpio.write(greenPin, rpio.LOW);
    }

};

// Off
setLed(false, false, false);
rpio.sleep(1);

// Red
setLed(true, false, false);
rpio.sleep(1);

// Blue
setLed(false, true, false);
rpio.sleep(1);

// Green
setLed(false, false, true);
rpio.sleep(1);

// Magenta
setLed(true, true, false);
rpio.sleep(1);

// Yellow
setLed(true, false, true);
rpio.sleep(1);

// Cyan
setLed(false, true, true);
rpio.sleep(1);

// White
setLed(true, true, true);
rpio.sleep(1);
