'use strict';

const express = require('express');
const http = require('http');
const { ExpressPeerServer } = require('peer');

const app = express();
const server = http.createServer(app);
const PORT = Number(process.env.PORT || 10000);
const PEER_PATH = '/peerjs';

app.disable('x-powered-by');
app.get('/', (_req, res) => {
  res.json({
    ok: true,
    service: 'BORDERFORGE signaling',
    peerPath: PEER_PATH,
    note: 'PeerJS signaling only; game state travels browser-to-browser.'
  });
});
app.get('/health', (_req, res) => res.status(200).send('ok'));

const peerServer = ExpressPeerServer(server, {
  path: '/',
  proxied: true,
  allow_discovery: false,
  alive_timeout: 60000,
  expire_timeout: 10000
});

app.use(PEER_PATH, peerServer);

peerServer.on('connection', client => {
  console.log(`[peer] connected ${client.getId()}`);
});
peerServer.on('disconnect', client => {
  console.log(`[peer] disconnected ${client.getId()}`);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`BORDERFORGE signaling listening on 0.0.0.0:${PORT}${PEER_PATH}`);
});
