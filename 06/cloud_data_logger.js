// Start
var express = require('express');
var app = express();
var piREST = require('pi-arest')(app);
var sensor = require('node-dht-sensor');

// ID should be 6 characters long
piREST.set_id('p5vgct');
piREST.set_name('pi_cloud');
piREST.set_mode('bcm');

// Connect to cloud.aREST.io
piREST.connect();

// Start server
var server = app.listen(80, function() {
    console.log('Listening on port %d', server.address().port);
});

// Publish loop
setInterval(function() {

    // Read
    sensor.read(11, 4, function(err, temperature, humidity) {

        if (!err) {

            // Measurements
            var temperature = temperature.toFixed(1);
            var humidity = humidity.toFixed(1);

            // Publish temperature data
            piREST.publish('temperature', temperature);
        }

    });

}, 2000);
