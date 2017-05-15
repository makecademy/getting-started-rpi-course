// Include
var rpio = require('rpio');

// Sensor
rpio.open(7, rpio.INPUT, rpio.PULL_DOWN);

// LED
rpio.open(5, rpio.OUTPUT, rpio.LOW);
ledState = false;

// Alarm mode
alarmMode = false;

// Switch detection
function setAlarm(pin) {

    // Read button
    var state = rpio.read(pin);

    // Invert state if pressed
    if (state == true) {

        // Set alarm
        alarmMode = true;

    }

}

// Look on motion sensor pin
rpio.poll(7, setAlarm);

// Alarm
setInterval(function() {

    // If alarm, switch LED state
    if (alarmMode == true) {

        if (ledState == false) {
            rpio.write(5, rpio.LOW);
        } else {
            rpio.write(5, rpio.HIGH);
        }

        ledState = !ledState;

    }

}, 1000);
