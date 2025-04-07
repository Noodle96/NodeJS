const http = require('http');

const servidor = http.createServer((request, response) => {
    // console.log('Recibiendo una solicitud HTTP');
    // response.end('Hola desde el servidor HTTP de Node.js');
    // console.log('==> req solicitud');
    // console.log(request);

    // REQUEST
    // console.log('==> req.url');
    // console.log(request.url);

    // console.log('==> req.method');
    // console.log(request.method);

    // console.log('==> req.headers');
    // console.log(request.headers);
    
    //RESPONSE
    console.log('==> response.statusCode');
    console.log(response.statusCode);
    response.statusCode = 404;
    console.log(response.statusCode);

    console.log('==> response.getHeaders()');
    response.setHeader('Content-Type', 'text/plain');
    console.log(response.getHeaders());
        

    response.end('final');
});

const PORT = 3000;
servidor.listen(PORT, () => {
    console.log(`El servidor HTTP está escuchando en el puerto ${PORT}`);
});