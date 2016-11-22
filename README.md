MQTT-DEMO
=========
There are two types of broker and kindly choose one:

* broker-mongodb - easy to setup in Windows

* broker-redis - easy to setup in Linux/*nix

# Run MQTT-demo in Intel Galileo/Edison and PC (Windows)
--------------------------------------------------------
## Setup MongoDB in Windows

* Download and install MongoDB. 

* Open Command Prompt, create database directory
```shell
$ mkdir C:\data
$ mkdir C:\data\db
```

* run MongoDB (mongod)
```shell
$ "C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe" --dbpath "C:\data\db"
```

## Run Broker

* Resolve dependencies:
```shell
$ npm install --save
```

* Set IP Address of Broker:
```shell
url: 'mongodb://<broker-ip>/mqtt'
```

* Run broker:
```shell
$ node broker-mongodb.js
```

## setup mqtt-client

* Resolve dependencies:
```shell
$ npm install --save
```

* Set the Broker IP Address in mqtt-client.
```shell
var client = mqtt.connect('mqtt://<broker-ip>');
```

* Run client:
```shell
$ node mqtt-client.js
```

## setup mqtt-sn (SN - Sensor Node) in Galileo/Edison

* Copy mqtt-sn into Galileo/Edison. 
```shell
$ scp <mqtt-sn-package> root@<board-ip-address>
```

* Set Broker IP Address in mqtt-sn
```shell
var sn = mqtt.connect('mqtt://<broker-ip>');
```

* Resolve dependencies:
```shell
$ npm install --save
```

* Run your sensor node:
```shell
$ node mqtt-sn.js
```


