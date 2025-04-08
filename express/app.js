const express = require('express');
const app = express();
const {infoCartas}  = require('./cartas');

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
app.get('/api/cartas/comunes', (request, response) => {
    response.send(infoCartas.comunes);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});