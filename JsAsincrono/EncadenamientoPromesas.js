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
            let hora = 13;
            if(hora <= 12){
                resolve('Solicitud procesada.');
            }else{
                reject('Soliciutd no procesada, acercarse a la facultad.');
            }
        }, 2000);
    });
}

const name_solicitud = 'retiro_matricula';
envioSolicitud(name_solicitud)
    .then(respuesta => {
        // console.log(respuesta);
        console.log("first then");
        return procesarSolicitud(respuesta);
    })
    .then(respuesta => {
        console.log("second then");
        console.log(respuesta);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log('La solicitud ha terminado en el sistema.');
    });