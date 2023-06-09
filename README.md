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
## Built With

ExpressJS, SocketIO

### Prerequisites

* npm

### Installation

1. Clone the repo

```sh
git clone https://github.com/td2thinh/socketIO-server-iot.git
```

2. Install dependencies

```sh
npm install
```

## Usage
Run app
```sh
npm start
```

