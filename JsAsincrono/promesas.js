/*
    Promesas
    - Son objetos que representan la terminación o el fracaso de una operación asíncrona.
                                 Promesa
                                    |
                                    |
                                Pediente
                                (pending)
                                    /\
                                   /  \
                                  /    \
                                 /      \
                            Cumplida   Rechazada
                          (fullfilled)  (rejected)
    
    
    - Dicho objeto se le asocia una función callback.
    - El objeto promesa tiene tres estados:
        1. Pendiente (pending): El estado inicial, ni cumplida ni rechazada.
        2. Cumplida (fullfilled): La operación se completó con éxito.
        3. Rechazada (rejected): La operación falló.
    - Una vez que una promesa se cumple o se rechaza, no puede volver a cambiar su estado.
    - Las promesas son una forma de manejar operaciones asíncronas en JavaScript.
    - Se pueden encadenar promesas para realizar operaciones secuenciales.
    - Se pueden manejar errores de manera más sencilla que con callbacks.
    - Se pueden cancelar.
*/
console.log("Seccion de promesas");

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = false;
        if (exito) {
            resolve("La promesa se cumplió con éxito");
        } else {
            reject("La promesa fue rechazada");
        }
    }, 2000);
});
console.log(miPromesa);
miPromesa
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("La promesa ha terminado");
    });
