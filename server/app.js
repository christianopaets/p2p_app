const { ExpressPeerServer } = require('peer');
const express = require('express');

const app = express();

app.get('/', (req, res, next) => res.send('Hello world!'));

const http = require('http');

const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {
    debug: true,
    path: '/chat'
});

app.use('/peerjs', peerServer);

server.listen(process.env.PORT || 9000);
