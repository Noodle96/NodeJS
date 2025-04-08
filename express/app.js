const express = require('express');
const app = express();
const {infoCartas}  = require('./cartas');

// Routers: Reutilizar la parte inicial de un path
const routerComunes = express.Router();
app.use('/api/cartas/comunes', routerComunes);

// console.log(infoCartas);
// Routing
app.get('/', (request, response) => {
    response.send('Primer servidor con Express.js y Node.js');
});

app.get('/api/cartas', (request, response) => {
   response.send(infoCartas); 
});

app.get('/api/cartas/legendarias', (request, response) => {
    response.send(infoCartas.legendarias);
});
// app.get('/api/cartas/comunes', (request, response) => {
routerComunes.get('/', (request, response) => {
    response.send(infoCartas.comunes);
});

app.get('/api/cartas/elixir/:costoElixir', (request, response) => {
    let costoElixir = request.params.costoElixir;
    console.log(request.params); // { tipo: 'especiales' }
    console.log(typeof costoElixir); // string|
    costoElixir = parseInt(costoElixir);
    console.log(typeof costoElixir); // number

    const comunesElixir3 = infoCartas.comunes.filter(carta => carta.costo === costoElixir);
    const especialesElixir3 = infoCartas.especiales.filter(carta => carta.costo === costoElixir);
    const epicasElixir3 = infoCartas.epicas.filter(carta => carta.costo === costoElixir);
    const legendariasElixir3 = infoCartas.legendarias.filter(carta => carta.costo === costoElixir);
    const resultadoFinal = [
        ...comunesElixir3,
        ...especialesElixir3,
        ...epicasElixir3,
        ...legendariasElixir3
    ];
    if(resultadoFinal.length === 0){
        return response.status(404).send('No hay cartas con ese costo de elixir');
    }
    return response.send(JSON.stringify(resultadoFinal));
});
app.get('/api/cartas/:tipo', (request, response) => {
    const tipo = request.params.tipo;
    const resultado = infoCartas[tipo];
    if(resultado.length === 0){
        return response.status(404).send('No hay cartas de ese tipo');
    }
    return response.send(JSON.stringify(resultado));
});

// FILTRAR POR MAS DE UN PARAMETRO Y
// PARAMETROS QUERY =>  Ordenarlos en base a su daño
// app.get('/api/cartas/comunes/:tipo/:costo', (request, response)  => {
routerComunes.get('/:tipo/:costo', (request, response)  => {
    // console.log(request.params); // { tipo: 'especiales' }
    // console.log(typeof request.params); // object
    const tipo = request.params.tipo;
    let costo = request.params.costo;
    costo = parseInt(costo);
    const resultado = infoCartas.comunes.filter(carta =>
        carta.tipo === tipo && carta.costo === costo
    );
    if(resultado.length === 0){
        return response.status(404).send('No hay cartas de ese tipo y costo');
    }
    console.log("==> request.query", request.query);
    console.log(request.query.ordenar); // undefined si no existe ordenar

    // http://localhost:3000/api/cartas/comunes/tierra/3?ordenar=vistas
    if(request.query.ordenar === 'danhio'){ // si no hay seria undefined
        resultado.sort((a, b) => a.daño - b.daño);
    }
    return response.status(200).send(JSON.stringify(resultado))
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});