const Player = require(__dirname + '/player');
const io = require('socket.io')(http);

module.exports = class game {
    constructor() {
        io.on('connection', socket => {
            console.log('a player connected to a game via socket')
        });
    }

    startGame(){

    }
};