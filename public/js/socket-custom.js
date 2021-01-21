var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Enviar información
socket.emit('EnviarMensaje', {
    usuario: 'Valerdi',
    mensaje: 'Hola mundo socket'
}, function(resp) {
    console.log('respuesta server: ', resp);


});

//Escuchar información
socket.on('EnviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});