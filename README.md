MQTT-DEMO
=========
There are two types of broker and kindly choose one:

* broker-mongodb - easy to setup in Windows

* broker-redis - easy to setup in Linux/*nix

# Run MQTT-demo in Intel Galileo/Edison and PC
-----------------------------------------------
## setup broker-mongodb in your PC

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

* Open Git Bash in mqtt-broker project directory. By default, the code (broker-mongodb.js) run with local MongoDB (written localhost there). Resolve dependencies by entering this command:
```shell
$ npm install --save
```

* Find the IP Address of your PC (ipconfig would do), and replace it with **localhost** in code (broker-mongodb.js). For example, in my setup:
```shell
url: 'mongodb://10.207.146.83:27017/mqtt'
```

* Upon successful, run broker:
```shell
$ node broker-mongodb.js
```

* During this time, Windows might asks your permission to allow access. Kindly allow broker. By performing this action, the port 1883 will be open by Windows so that SN (sensor-node) can connect to broker. 

## setup mqtt-client

* Open Git Bash in mqtt-client project directory. Resolve dependencies first:
```shell
$ npm install --save
```

* Kindly note that, the code (mqtt-client) connects to local broker (on the same PC). Set the IP Address in mqtt-client.js according to broker-mongodb (for example, in my case is **mqtt://<10.207.146.83>**). 
```shell
var client = mqtt.connect('mqtt://10.207.146.83');
```

* Upon successful, run client:
```shell
$ node mqtt-client.js
```

## setup mqtt-sn (SN - Sensor Node) in Galileo/Edison

* Download mqtt-sn [](). 

* transfer the mqtt-sn into Galileo/Edison (use Git Bash)
```shell
$ scp <mqtt-sn> root@<board-ip-address>
```

* Make sure to set Broker IP Address in mqtt-sn (open mqtt-sn.js and replace with the IP Address of your broker). This will allow mqtt-sn to be able to connect to broker-mongodb. (for example in my case **mqtt://10.207.146.83**).
```shell
var sn = mqtt.connect('mqtt://10.207.146.83');
```

* Resolve dependencies:
```shell
$ npm install --save
```

* Run your sensor node:
```shell
$ node mqtt-sn.js
```


