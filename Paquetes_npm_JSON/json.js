/*
    JSON (Javacript Object Notation) es un formato  de texto 
    de intercambio dedatos ligero y fácil de leer y escribir
    para humanos.

    Se utiliza para almacenar y transportar datos.

    Se representan como pares clave-valor, rodeado por dos llaves {}
    y separados por comas.
    {
        "name": "John Doe",
        "edad": 17,
        "temas": [
            "JavaScript",
            "Node.js",
            "npm"
        ],
        "esPublico": true,
    }

    JSON to js
    js to JSON
*/

// CONVERT JSON to js
const curso = require('./curso.json');
// console.log( curso); // object
console.log( typeof curso); // object

console.log(curso.titulo);
console.log(curso.creditos);
console.log(curso.bestTopics);
console.log(curso.bestTopics[0].nombre);
console.log(curso.isPrerequisito);


// CONVERT js to JSON
const curso2 = {
    titulo: 'Algebra linea 2',
    creditos: 4,
    bestTopics: [
        {
            nombre: 'Espacios vectoriales',
            horas: 12
        },
        {
            nombre: 'Producto punto',
            creditos: 7,
            important: false
        }
    ],
    isPrerequisito: true
};

const curso2JSON = JSON.stringify(curso2);
console.log(curso2JSON); // string
console.log(typeof curso2JSON);

// Json(string) to js(object)
let infoCursoObjeto = JSON.parse(curso2JSON); // object
console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto); // object



