// Sensor package
var sensor = require('node-dht-sensor');

// Read data
sensor.read(11, 4, function(err, temperature, humidity) {
    if (!err) {
        console.log('Temperature: ' + temperature.toFixed(1) + '°C, ' +
            'Humidity: ' + humidity.toFixed(1) + '%'
        );
    }
});