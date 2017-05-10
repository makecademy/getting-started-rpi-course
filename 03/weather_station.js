// Packages
var sensor = require('node-dht-sensor');
var request = require('request');

// City
var city = 'london';
var country = 'uk';

// Read data every 2 seconds
setInterval(function() {

    // Read data from sensor
    sensor.read(11, 4, function(err, temperature, humidity) {
        if (!err) {
            console.log('Measured temperature: ' + temperature.toFixed(1) + '°C');
            console.log('Measured humidity: ' + humidity.toFixed(1) + '%')
        }
    });

    // Read data from the web
    url = 'http://samples.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&appid=b1b15e88fa797225412429c1c50c122a1';
    request(url, function(err, res, body) {

    	// Get data
        var weather_data = JSON.parse(body);
        // console.log(weather_data);

        // Convert temperature
        weather_data.main.temp = weather_data.main.temp - 273.15;

        console.log('Local temperature: ' + (weather_data.main.temp).toFixed(1) + '°C');
        console.log('Local humidity: ' + (weather_data.main.humidity).toFixed(1) + '%');

    });

}, 2000);
