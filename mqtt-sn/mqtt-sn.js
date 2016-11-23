/*
 * mqtt-sn: SN (Sensor Node) sends data to broker.
 *
 * Author: hadrihl // hadrihilmi@gmail.com */
var mqtt = require('mqtt');
var m = require('mraa');

var sn = mqtt.connect('mqtt://10.207.146.83'); // replace with your PC IP Address here (broker)

// Change accordingly, in this example
// I'm using analog pin A0 for moisture sensor
var moisture = new m.Aio(0);

sn.on('connect', function() {
	console.log("sn connected");

	sn.subscribe('moisture');

	setInterval(function() {
		var data = moisture.read();
		console.log("data: " + data);
		sn.publish('moisture', data.toString());
	}, 1000);
});