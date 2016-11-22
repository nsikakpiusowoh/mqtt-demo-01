/*
 * broker-mongodb: Broker + MongoDB.
 *
 * Author: hadrihl // hadrihilmi@gmail.com */
var mosca = require('mosca');

var ascoltatore = {
	type: 'mongo',
	url: 'mongodb://localhost:27017/mqtt',
	pubsubCollection: 'ascoltatori',
	mongo: {}
};

var settings = {
	host: '10.207.146.83', // replace with your PC IP Address here
	port: 1883,
	backend: ascoltatore
};

var server = new mosca.Server(settings);

server.on('clientConnected', function(client) {
	console.log('client connected', client.id);
});

server.on('published', function(packet, client) {
	console.log('Published', packet.payload);
});

server.on('ready', setup);

function setup() {
	console.log("Mosca server is up and running...");
}