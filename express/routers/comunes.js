const express = require('express');
const {comunes}  = require('../datos/cartas').infoCartas;
const routerComunes = express.Router();

routerComunes.use(express.json()); // Middleware para parsear el cuerpo de la peticion a JSON


// app.get('/api/cartas/comunes', (request, response) => {
routerComunes.get('/', (request, response) => {
    response.send(comunes);
});

routerComunes.get('/:costoElixir', (request, response) => {
    let costoElixir = request.params.costoElixir;
    console.log(request.params); // { tipo: 'especiales' }
    console.log(typeof costoElixir); // string|
    costoElixir = parseInt(costoElixir);
    console.log(typeof costoElixir); // number

    const resultado = comunes.filter(carta => carta.costo === costoElixir);
    // const especialesElixir3 = infoCartas.especiales.filter(carta => carta.costo === costoElixir);
    // const epicasElixir3 = infoCartas.epicas.filter(carta => carta.costo === costoElixir);
    // const legendariasElixir3 = infoCartas.legendarias.filter(carta => carta.costo === costoElixir);
    // const resultadoFinal = [
    //     ...comunesElixir3,
    //     ...especialesElixir3,
    //     ...epicasElixir3,
    //     ...legendariasElixir3
    // ];
    if(resultado.length === 0){
        return response.status(404).send('No hay cartas con ese costo de elixir');
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
    const resultado = comunes.filter(carta =>
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

// POST => Crear una carta
routerComunes.post('/', (request, response) => {
    const carta = request.body;
    console.log(carta);
    comunes.push(carta);
    return response.status(200).send(JSON.stringify(comunes));
});




module.exports = {
    routerComunes: routerComunes,
};