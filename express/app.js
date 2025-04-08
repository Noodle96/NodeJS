const express = require('express');
const app = express();
const {routerComunes} = require('./routers/comunes');
const {routerLegendarias} = require('./routers/legendarias');
const {infoCartas} = require('./datos/cartas');

// Routers: Reutilizar la parte inicial de un path
app.use('/api/cartas/comunes', routerComunes);
app.use('/api/cartas/legendarias', routerLegendarias);

// Routing
app.get('/', (request, response) => {
    response.send('Primer servidor con Express.js y Node.js');
});

app.get('/api/cartas', (request, response) => {
   response.send(infoCartas); 
});

// no usar
app.get('/api/cartas/:tipo', (request, response) => {
    const tipo = request.params.tipo;
    const resultado = infoCartas[tipo];
    if(resultado.length === 0){
        return response.status(404).send('No hay cartas de ese tipo');
    }
    return response.send(JSON.stringify(resultado));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});