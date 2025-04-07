function envioSolicitud(name_solicitud){
    return new Promise((resolve, reject) => {
        console.log(`Enviando solicitud ${name_solicitud}`);
        setTimeout( () => {
            if(name_solicitud === 'retiro_matricula'){
                resolve('Solicitud de retiro de matricula enviada.');
            }else{
                reject('Solicitud no enviada, comunicarse a la facultad.');
            }
        }, 2000);
    });
}

function procesarSolicitud(respuesta){
    return new Promise((resolve, reject) => {
        console.log(`Procesando solicitud cuya respuesta fue: "${respuesta}"`);
        setTimeout( () => {
            let hora = 1;
            if(hora <= 12){
                resolve('Solicitud procesada.');
            }else{
                reject('Soliciutd no procesada, acercarse a la facultad.');
            }
        }, 2000);
    });
}

// const name_solicitud = 'retiro_matricula';
// envioSolicitud(name_solicitud)
//     .then(respuesta => {
//         // console.log(respuesta);
//         console.log("first then");
//         return procesarSolicitud(respuesta);
//     })
//     .then(respuesta => {
//         console.log("second then");
//         console.log(respuesta);
//     })
//     .catch(error => {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log('La solicitud ha terminado en el sistema.');
//     });

// Encadenamiento de promesas con async/await
// Todas las funciones con async retornan una promesa
async function realizarSolicitud(name_soliciutud){
    try{
        console.log("Function async realizarSolicitud");
        // con await le decimos que el proceso asincrono se complete.
        // antes de continuar la ejecucion de la función
        const respuesta =  await envioSolicitud(name_soliciutud);
        console.log(respuesta);
        // Si en respuesta hay un error, se lanza una excepcion(catch) y no continuamos aqui
        const repuestaProcesada = await procesarSolicitud(respuesta);
        console.log(repuestaProcesada);
        console.log("TODO EL PROCESO TERMINADO");
        
    }catch(error){
        console.log("Error: " + error);
    }
}   

realizarSolicitud('retiro_matricula');