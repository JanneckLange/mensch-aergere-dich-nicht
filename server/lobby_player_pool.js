const config = require('config.json')(__dirname + '/config.dev.json');
let player_pool = new Array(config.limits.max_player_in_lobby);

module.exports = class lobby {
    constructor() {
        console.log('player_pool erstellt')
    }

    getPlayerIndex(socket) {
        for (let i = 0; i < player_pool.length; i++) {
            if(player_pool[i] === undefined){
                player_pool[i] = socket;
                return i;
            }
        }
    }

    removePlayer(index){
        player_pool[index] = undefined;
    }

    getActivePlayers(){
        return player_pool;
    }

    printPlayer(){
        let t = '[';
        for (let i = 0; i < player_pool.length; i++) {
            if(player_pool[i]===undefined){
                t+=' 0 '
            }else{
                t+= ' 1 '
            }
        }
        t+=']';
        console.log(t)
    }
};