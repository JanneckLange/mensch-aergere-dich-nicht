let socket;

$(document).ready(function () {
    socket = io();

    socket.on('hello', () => {
        console.log('Socket connection established')
    });

    socket.on('connect_error', () => {
        console.log('Connection lost')
    });
});