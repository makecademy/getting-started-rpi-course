// Packages
var express = require('express');
var rpio = require('rpio');

// Create app
var app = express();

// Use public folder
app.use(express.static('public'));

// Pin
var outputPin = 7;
rpio.open(outputPin, rpio.OUTPUT, rpio.LOW);

// Get data
app.get('/lamp', function(req, res) {

    // Get pin value
    var state = req.query.state;

    if (state == 'on') {
        rpio.write(outputPin, rpio.HIGH);
    }
    if (state == 'off') {
        rpio.write(outputPin, rpio.LOW);
    }

});

// Start app
app.listen(3000, function() {
    console.log('App started on port 3000')
})
