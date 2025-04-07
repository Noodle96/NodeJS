/*
    - URL (Unifrorm Resource Locator) 
        - Direccion de un recurso en la web
    
    -Estructura de una URL
        https://www.ejemplo.com.org/ruta/recurso?parametro1=valor1&parametro2=valor2#fragmento
        - Protocolo: https
        - Dominio: www.ejemplo.com
        - Dominio de nivel superior (TLD): .org, .net, .int, .edu, .gob
        - Ruta: /ruta/recurso
        - Parámetros de consulta: ?parametro1=valor1&parametro2=valor2
            - Separa el recurso de los parámetros de consulta
            - Separa los parámetros entre sí con &
            - Cada parámetro tiene un nombre y un valor separados por =
        - Fragmento: #fragmento
    - Usamos parámetros query para filtrar solicitudes GET.

*/
const url = require('url');
const direccion = 'https://www.ejemplo.com/ruta/recurso?parametro1=valor1&param-etro2=valor2#fragmento';
const myUrl = new URL(direccion);
console.log(myUrl);
console.log(myUrl.href); // 'https://www.ejemplo.com/ruta/recurso?parametro1=valor1&param-etro2=valor2#fragmento'
console.log(myUrl.protocol); // 'https:'
console.log(myUrl.host); // 'www.ejemplo.com'
console.log(myUrl.hostname); // 'www.ejemplo.com'
console.log(myUrl.pathname); // '/ruta/recurso'
console.log(myUrl.search); // '?parametro1=valor1&param-etro2=valor2'
console.log(myUrl.searchParams); // URLSearchParams { 'parametro1' => 'valor1', 'param-etro2' => 'valor2' }
    console.log(myUrl.searchParams.get('parametro1')); // 'valor1'
    console.log(myUrl.searchParams.get('param-etro2')); // 'valor2'
console.log(myUrl.hash); // '#fragmento'



