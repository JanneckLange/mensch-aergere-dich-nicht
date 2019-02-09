const Lobby = require(__dirname + '/lobby');
const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const servestatic = require('serve-static');
const router = express.Router();
const config = require('config.json')(__dirname + '/config.dev.json');
const publicDirectory = path.join(__dirname, '/../client/public/');


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

router.use((req, res, next) => {
    console.log('/' + req.method);
    next();
});

router.get('/', (req, res) => {
    res.sendFile(path.join(publicDirectory, config.lobby.public));
});

app.use(servestatic(publicDirectory));
app.use('/', router);
app.use('/lobby', Lobby);


http.listen(config.server.port, config.server.host, () => {
    console.log('Live at Port ' + config.server.port);
});