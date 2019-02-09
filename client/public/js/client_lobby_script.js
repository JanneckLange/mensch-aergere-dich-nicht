let config = {};

$.ajax({
    url: '../config.json',
    async: false,
    success: function (data) {
        config = data;
    }
});

$(document).ready(function () {
    $.ajax({//Get Lobby data from backend
        type: "GET",
        url: config.server.host + ':' + config.server.port + "/lobby",
        data: '',// now data come in this function
        contentType: "application/json; charset=utf-8",
        crossDomain: true,
        dataType: "json",
        success: function (data, status, jqXHR) {
            console.log(data)
            for (let i = 0; i < data.games.length; i++) {
                generateGameList(data.games[i])
            }

        },

        error: function (jqXHR, status) {
            // error handler
            console.log(jqXHR);
            console.log('fail: ' + status.code);
        }
    });
});

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
    $.ajax({//Get Lobby data from backend
        type: "POST",
        url: config.server.host + ':' + config.server.port + "/lobby",
        data: id,// now data come in this function
        contentType: "application/json; charset=utf-8",
        crossDomain: true,
        dataType: "json",
        success: function (data, status, jqXHR) {
            console.log(data)

        },

        error: function (jqXHR, status) {
            // error handler
            console.log(jqXHR);
            console.log('fail: ' + status.code);
        }
    });
}