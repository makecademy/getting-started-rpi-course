// Packages
var express = require('express');
var sensor = require('node-dht-sensor');

// Create app
var app = express();

// Get data
app.get('/', function(req, res) {

    // Read data
    sensor.read(11, 4, function(err, temperature, humidity) {

        if (!err) {
            res.send('Temperature: ' + temperature.toFixed(1) + '°C, ' +
                'Humidity: ' + humidity.toFixed(1) + '%'
            );
        } else {
            res.send('Error');
        }

    });

});

// Start app
app.listen(3000, function() {
    console.log('App started on port 3000')
})
