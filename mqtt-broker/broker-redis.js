/*
 * broker-redis: Broker plays an important role to coordinate between SN (sensor network) and client.
 *
 * Author: hadrihl // hadrihilmi@gmail.com */
var mosca = require('mosca');
var ascoltatore = {
	type: 'redis',
	redis: require('redis'),
	db: 12,
	port: 6379,
	return_buffers: true,
	host: '127.0.0.1'
};

var settings = {
	host: 'localhost',
	port: 1883,
	backend: ascoltatore,
	persistence: {
		factory: mosca.persistence.Redis
	}
};

var server = new mosca.Server(settings);

server.on('clientConnected', function(client) {
	console.log('client connected!', client.id);
});

// fired when a message is received
server.on('published', function(packet, client) {
	console.log('Published', packet.payload);
});

server.on('ready', setup);

function setup() {
	console.log("Mosca server is up and running...");
};