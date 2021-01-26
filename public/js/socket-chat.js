var socket = io();

var params = new URLSearchParams(window.location.search)

if(!params.has('nombre') || !params.has('sala')) {
  window.location = 'index.html'
  throw new Error ('El nombre y sala son necesarios')
}

var usuario = {
  nombre: params.get('nombre'),
  sala: params.get('sala')
}

socket.on('connect', function() {
    console.log('Conectado al servidor');

    socket.emit('entrarChat', usuario , resp => {
      renderizarUsuarios(resp)
    })
});

// escuchar
socket.on('disconnect', function() {
  console.log('Perdimos conexión con el servidor');
});

socket.on('mensajePrivado', mensaje => {
  console.log('Mensaje privado: ', mensaje)
})


// Enviar información
/*socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});*/

// Escuchar información
socket.on('crearMensaje', mensaje => {

    renderizarMensaje(mensaje, false)
    scrollBottom()

});

/* Escuchar cambios de usuarios cuando un usuario entra o sale del chat */

socket.on('listaPersonas', personas => {
  renderizarUsuarios(personas)
})