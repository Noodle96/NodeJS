/*
    - Routing: Manejar las soliciutdes del cliente en base a ciertos criterios{método, camino}
        - Método: GET, POST, PUT, DELETE
        - Camino: /ruta/recurso
*/

// MANEJAR LAS DISTINTAS RUTAS EN NODE.JS
const http = require('http');
const {infoCartas}  = require('./cartas');
// console.log(infoCartas);

const servidor = http.createServer((request, response) => {
    console.log('Recibiendo una solicitud HTTP');
    const {method} = request;
    switch(method){
        case 'GET':
            return manejarSolicitudGET(request, response);
        case 'POST':
            return manejarSolicitudPOST(request, response);
        default:
            return console.log(`Método ${method} no soportado`);
            
    }
});

function manejarSolicitudGET(request, response){
    const {url} = request;
    const path = request.url;
    console.log(url);
    console.log(path);
    if(url === '/'){
        response.statusCode = 200;
        response.end('Bienvenidos a mi servidor con Node.js');
    }else if(url === '/cartas'){
        response.statusCode = 200;
        response.end(JSON.stringify(infoCartas));
    }
    else if(url === '/cartas/especiales'){
        response.statusCode = 200;
        response.end(JSON.stringify(infoCartas.especiales));
    }else{
        response.statusCode = 404;
        response.end('Ruta no encontrada');
    }
    // const {pathname, query} = url.parse(url, true);
    // console.log(`Recibiendo una solicitud GET en la ruta ${pathname}`);
    // console.log(`Query: ${query}`);
    // // console.log(`Query: ${query.nombre}`);
    // // console.log(`Query: ${query.apellido}`);
    
    // if(pathname === '/cartas'){
    //     const cartas = infoCartas();
    //     response.writeHead(200, {'Content-Type': 'application/json'});
    //     response.end(JSON.stringify(cartas));
    // }else{
    //     response.writeHead(404, {'Content-Type': 'text/plain'});
    //     response.end('Ruta no encontrada');
}

function manejarSolicitudPOST(request, response){
    const url = request.url;
    if(url === '/cartas/legendarias'){
        response.statusCode = 200; // default
        // console.log('Creando una nueva carta legendaria');
        let cuerpo = '';
        //  Se activa cada vez que llega un chunk(contenido) de datos al servidor
        request.on('data', (contenido) => {
            cuerpo += contenido.toString();
        });
         
        // Se activa cuando ya no hay más datos por recibir.
        request.on('end', () => {
            // console.log(`Creando una nueva carta legendaria ${cuerpo}`);
            console.log('Cuerpo =>\n');
            console.log(cuerpo);
            console.log(typeof cuerpo);

            // convertir a un objeto de js
            cuerpo = JSON.parse(cuerpo);
            console.log(typeof cuerpo);
            console.log(cuerpo);
            
            
            response.end(`Creando una nueva carta legendaria ${cuerpo}`);
        });
        return response.end('Se ha solicitado crear una nueva carta legendaria');
    }
}

const PORT = 3000;
servidor.listen(PORT, () => {
    console.log(`El servidor HTTP está escuchando en el puerto ${PORT}`);
});

