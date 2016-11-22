/*
 * mqtt-sn: SN (sensor network) sends data to broker.
 *
 * Author: hadrihl // hadrihilmi@gmail.com */
var mqtt = require('mqtt');
var m = require('mraa');

var sn = mqtt.connect('mqtt://10.207.146.83'); // replace with your PC IP Address here (broker)

// Change accordingly, in this example
// I'm using digital pin 7 for moisture sensor
var moisture = new m.Gpio(0);

sn.on('connect', function() {
	console.log("sn connected");

	sn.subscribe('moisture');
	var data = moisture.read();

	setInterval(function() {
		client.publish('moisture', dataToString());
	}, 1000);
});