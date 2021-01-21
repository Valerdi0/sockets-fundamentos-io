const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('EnviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar al cliente
    client.on('EnviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('EnviarMensaje', data);

        // if (data.usuario) {
        //     callback({
        //         respuesta: 'Todo salio bien'
        //     });

        // } else {
        //     callback({
        //         respuesta: 'TODO SALIO MAL!!!!!!!!!'
        //     });
        // }

    });
});