/*
    - Modelo Cliente-Servidor
        Modelo que usamos para acceder a internet y obtener recursos
        e información de otros servidores.

    - Cliente: Navegador desde el cual se realizan solicitudes a un servidor
    - Servidor: Programa que se ejecuta en un servidor fisico para ofrecer un
              servicio a los clientes.(Envia informacion al cliente)
    
    - EL protocolo HTTP define el formato de los mensajes.
    
    - Protocolo: Conjunto de reglas que definen la forma en la que se transmite
                la información entre dos partes.

    - HTTP: Hipertext Transfer Protocol.
    - HTTPS: Hipertext Transfer Protocol Secure.

    - Solicitudes HTTP: (Cliente le pide inf a un servidor, esta realizando un request)
        Un Request contiene todos estos elementos:
            - Métodos HTTP: verbo o sustantivo que indica la acción a realizar
                - GET: solicitamos un recurso especifico.
                - POST: Crear un recurso especifico.
                - PUT: Modificar un recursos específico.
                - DELETE: Eliminar un recurso específico.
                - PATCH: Modificar parcialmente un recurso específico.
            - Camino (path)
            - Version de HTTP
            - Encabezados (headers)
                -Proveen información adicional sobre la solicitud
            - Cuerpo (body)
                - Contiene la información que se envía al servidor para procesar
                  la solicitud
                - No se incluyen en todas las solicitudes. SOlo en aquellas que
                  requieran enviar informacion. Por ejemplo POST, PUT

            - Entonces, el cliente envia esa solicitud en un formato especifico,
              y nosotros en el servidor con node extraemos la información de la
              solicitud y la procesamos.
                
    - Respuestas HTTP: (Servidor le responde al cliente, esta realizando un response)
        Un Response contiene todos estos elementos:
            - Código de estado HTTP (status code): Indica el resultado de la solicitud
                - Respuestas Informativas(100-199).
                    - 100 Continue
                    - 101 Switching Protocols
                    - 102 Processing
                - Respuestas Exitosas(200-299).
                    - 200 OK
                    - 201 Created
                    - 202 Accepted
                    - 204 No Content
                - Redirecciones(300-399).
                    - 300 Multiple Choices
                    - 301 Moved Permanently
                    - 302 Found
                    - 303 See Other
                - Errores del cliente(400-499).
                    - 400 Bad Request
                    - 401 Unauthorized
                    - 402 Payment Required
                    - 403 Forbidden
                    - 404 Not Found
                - Errores del servidor(500-599).
                    - 500 Internal Server Error
                    - 501 Not Implemented
                    - 502 Bad Gateway
                    - 503 Service Unavailable
                    - 504 Gateway Timeout
            - Texto del estado
            -Version de HTTP
            - Encabezados (headers)
                - Proveen información adicional sobre la respuesta
            - Cuerpo (body)
                - Contiene la información que se envía al cliente como respuesta
                - Puede ser un archivo HTML, JSON, XML, etc.
    
    - Con Node y Express podemos especificar el código de estado de la respuesta
    HTTP desde nuestro servidor.

    - El Módulo HTTP: Este módulo le permite a Node.js transmitir información con
      el protocolo HTTP. Permite crear servidores HTTP y manejar solicitudes
      y respuestas HTTP.
*/

// Creando un servidor HTTP
const http = require('http'); 
const servidor  = http.createServer( (request, response) => {

    // Enviar la respuesta al cliente
    console.log('Recibiendo una solicitud HTTP');
    response.end('Hola desde el servidor HTTP de Node.js'); 
} );

/*
    Cuando creamos el servidor y lo inicializamos vamos a lograr que el servidor
    escuche a las solicitudes, para ello necesitamos un puerto especifico.

    Puerto:
        - Ubicacion virtual del SO en la cual se puede acceder a una app o a un 
          proceso específico que se este ejecutando en ese puerto.
*/
servidor.listen(3000, () => {
    console.log('El servidor HTTP está escuchando en el puerto 3000');
    
});