// Packages
var express = require('express');
var rpio = require('rpio');

// Create app
var app = express();

// Pin
var outputPin = 7;
rpio.open(outputPin, rpio.OUTPUT, rpio.LOW);

// Get data
app.get('/', function(req, res) {

    // Get pin value
    var state = req.query.state;

    if (state == 'on') {
        rpio.write(7, rpio.HIGH);
    }
    if (state == 'off') {
        rpio.write(7, rpio.LOW);
    }

    res.send('Command received');

});

// Start app
app.listen(3000, function() {
    console.log('App started on port 3000')
})
