const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path');

const socketio = require('socket.io');
const http = require('http');

const routes = require('./routes');

const { username, password, cluster, database } = require('../src/util/database');
const app = express();
const server = http.Server(app);
const io = socketio(server);

mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}/${database}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const connectedUsers = {};


io.on('connection', socket => {
    console.log('Usuário conectado', socket.id);
    const { user_id } = socket.handshake.query;

    connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});

//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para ediçao, delete)
//req.body = Acessar corpo da requisiçao (para criaçao, ediçao)

//app.use(cors({ origin: 'http://localhost:3000' }));

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(3333);

