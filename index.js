var socket = require('socket.io'),
    http = require('http'),
    server = http.createServer(handleRequest),
    socket = socket.listen(server);

socket.on('connection', function(connection) {
    console.log('User Connected');
    connection.on('message', function(msg){
        socket.emit('message', msg);
    });
});

var server_port = process.env.PORT || 8080;

server.listen(server_port, function () {

    console.log( 'Server listening on: http://localhost:%s', server_port);

});
