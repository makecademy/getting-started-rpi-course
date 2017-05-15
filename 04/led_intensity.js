// Package
var rpio = require('rpio');

// Pin
var pin = 12;

// PWM settings  
var range = 1024;
var max = 128;
var clockdiv = 8;
var interval = 1;

// Enable PWM
rpio.open(pin, rpio.PWM);
rpio.pwmSetClockDivider(clockdiv);
rpio.pwmSetRange(pin, range);

// Pulse
var value = 0;
setInterval(function() {

    // Set PWM
    console.log(value);
    rpio.pwmSetData(pin, value);

    // Increase value
    value += interval;

    // Reset
    if (value > max) {
        value = 0;
    }

}, 100);
