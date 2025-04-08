const express = require('express');
const {legendarias} = require('../datos/cartas').infoCartas;  
const routerLegendarias = express.Router();

routerLegendarias.get('/', (request, response) => {
    response.send(JSON.stringify(legendarias));
});

module.exports = {
    routerLegendarias: routerLegendarias,
};