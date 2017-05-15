// Packages
var express = require('express');
var app = express();
var piREST = require('pi-arest')(app);

// pi-aREST config
piREST.set_id('58g6ct');
piREST.set_name('led_control');
piREST.set_mode('bcm');

// Connect to cloud.aREST.io
piREST.connect();

// Start server
var server = app.listen(80, function() {
    console.log('Listening on port %d', server.address().port);
});
