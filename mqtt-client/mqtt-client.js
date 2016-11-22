/*
 * mqtt-client: Receive sensor data from SN (sensor network) through broker.
 *
 * Author: hadrihl // hadrihilmi@gmail.com */
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://10.207.146.83'); // replace with your PC IP Address here

client.on('connect', function() {
	console.log("connected to broker.");
    client.subscribe('moisture');
});

client.on('message', function(topic, message) {
    console.log(message.toString());
});