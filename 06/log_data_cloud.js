// Sensor package
var sensor = require('node-dht-sensor');
var request = require('request');

// Dweet.io thing name
var thingName = 'myrpi3';

// Read data every 10 seconds
setInterval(function() {

    // Read
    sensor.read(11, 4, function(err, temperature, humidity) {

        if (!err) {

            // Measurements
            var temperature = temperature.toFixed(1);
            var humidity = humidity.toFixed(1);

            // Build URL
            var url = 'https://dweet.io/dweet/for/' + thingName + '?temperature=' + temperature + '&humidity=' + humidity;

            // Send the request
            request(url, function(error, response, body) {

                console.log(body);

            });
        }
    });

}, 10000);
