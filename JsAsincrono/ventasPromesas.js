const { getRandom} = require('./utils.js');

// const myMap = new Map();

// for(let e = 0; e < 1000000000; e++){
//     let value = getRandom();
//     if(myMap.has(value)){
//         myMap.set(value, myMap.get(value) + 1);
//     }else{
//         myMap.set(value, 1);
//     }
// }
// myMap.forEach((value, key) => {
//     console.log(`El valor ${key} se repitio ${value} veces`);
// });

const myOrder =  new Promise((resolve, reject) => {
    setTimeout(() => {
        const order = getRandom();
        if(order){
            resolve('Orden creada');
        }else{
            reject('No hay ordenes');
        }
    }, 2000);
});

myOrder
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('La promesa ha terminado');
    });