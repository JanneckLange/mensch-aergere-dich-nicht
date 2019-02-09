
let socket;

let config = {};
$.ajax({
    url: '../config.json',
    async: false,
    success: function (data) {
        config = data;
    }
});



$(document).ready(function () {
    socket = io();

    socket.on('lobbystatus', (data) => {
        for (let i = 0; i < data.games.length; i++) {
            generateGameList(data.games[i])
        }
    });

    socket.on('connect_error', () => {
        console.log('Connection lost')
    });
});


/**
 * todo delete old dives before creating new
 * @param game
 */
function generateGameList(game) {
    let game_div = document.createElement("div");
    game_div.classList.add('gameElement');

    let game_title = document.createElement("div");
    let game_title_t = document.createTextNode(game.title);
    game_title.appendChild(game_title_t);
    game_title.classList.add('gameTitle');
    game_div.appendChild(game_title);

    let game_info = document.createElement("div");
    let btn = document.createElement("BUTTON");
    let btn_t = document.createTextNode("Join Game");
    btn.appendChild(btn_t);
    btn.setAttribute('onclick', 'joinGame(' + game.id + ')');
    game_info.appendChild(btn);
    game_info.classList.add('gameInfo');
    game_div.appendChild(game_info);

    document.getElementById('appendHere').appendChild(game_div);
}

function joinGame(id) {
    socket.emit('joinRoom',id);
}