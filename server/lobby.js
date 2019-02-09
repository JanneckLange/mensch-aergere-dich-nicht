const config = require('config.json')(__dirname + '/config.dev.json');
const Player_pool = require(__dirname + '/lobby_player_pool');
const player_pool = new Player_pool();
const Game = require(__dirname + '/game');
let games = new Array(config.limits.max_games_created);

function lobbyChanged() {
    let player = player_pool.getActivePlayers();
    for (let i = 0; i < player.length; i++) {
        if (player[i] !== undefined) {
            player[i].emit('lobbystatus', getLobbyStatus());
        }
    }
}

function getLobbyStatus() {
    return {
        games: [
            {
                title: 'Game1',
                id: 1,
                player: 2
            }
        ]
    };
}

function joinRoom(socket, room){
    if(room === 0){
        createNewRoom()
    }else{

    }
}

function createNewRoom(){

}

module.exports = class lobby {
    constructor() {
        console.log('lobby erstellt')
    }

    joinLobby(socket) {
        let index = player_pool.getPlayerIndex(socket);
        console.log('player ' + index + ' joined lobby');
        socket.on('disconnect', () => {
            player_pool.removePlayer(index);
            console.log('player ' + index + ' disconnected')
        });

        socket.on('joinRoom', (data) => {
            console.log('player wont to join room nr ' + data)
        });

        lobbyChanged();
    }
};