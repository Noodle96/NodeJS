/*
    Evento
        Una acción que se realiza en la aplicación como un clic, un movimiento del
        ratón, una pulsación de tecla, etc.
        Los eventos se desencadenan y ejecutan internamente en el servidor
        
    Emitter(emisores)
        Objetos que emiten eventos nombrados y llaman a funciones específicas
        cuando ocurren, son instacias de la clase EventEmitter, estas tienen un
        método .on() para asociar una funcion al evento.

    Módulo events
        Permite crear y gestionar eventos personalizados, es parte de la API
        de Node.js y permite la creación de eventos personalizados.
        Se utiliza para crear emisores de eventos y gestionar la comunicación
        entre diferentes partes de una aplicación.
        Se puede importar con require('events')
        El módulo events tiene una clase llamada EventEmitter que se utiliza
        para crear emisores de eventos personalizados.
        Definir
        Emitir
        Escuchar
*/
const EventEmitter = require('events');
// console.log(EventEmitter);

const emisorProductos = new EventEmitter();
// console.log(emisorProductos);

// Cuando ocurra el evento compra en nuestra aplicacion vamos a definir
// dicha funcion flecha
// instancia.on(name, event Handler);
emisorProductos.on('compra', () =>  {
    console.log('Se realizo una compra');
    
});
emisorProductos.on('pago', (total) => {
    console.log(`Se realizo el pago por un total de $${total}.`);
});

// UNna vez hecha esa asociacion en el emisor de eventos, podemos emitir
// el evento

emisorProductos.emit('compra');
emisorProductos.emit('pago',700);
emisorProductos.emit('compra2');

