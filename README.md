# socketIO-server-iot

Simple Socket IO server using ExpressJS to mimick a IOT device sending data to a client over Websocket in a 5ms interval in the form:

```js
 data = {
            "x": new Date().getTime(),
            "y": sensorData,
        };
        socket.emit('data', data);
```

Server available at port 8080, to connect, simply initiate a client
```js
const socket = io('http://localhost:8080')
```

