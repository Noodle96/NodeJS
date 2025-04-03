// Modulo console
// Métodos Utiles
    // console.log()
    // console.error()
    // console.warn()
    // console.table()
    // console.time()
    // console.timeEnd()
    // console.clear()
    // console.table()

const { log } = require('console');


class ModulosBuiltIn {
    constructor(){
        this.name = "Modulos Built In";
    }
    saludar(){
        console.log('¡Hola Mundo!');
    }
    moduloConsole(){
        /*
            Este módulo implementa funcionalidades similar a la consola de un
            navegador web.
        */
        console.log("console.log()"); // Imprime en la consola  
        console.warn("console.warn()"); // Imprime en la consola con un warning
        console.error("ocurrio un error"); // Imprime en la consola con un error
        console.error(new Error("Ocurrio un error")); // Imprime en la consola con un error
        // console.clear(); // Limpia la consola
        console.log("console.log()"); // Imprime en la consola
    }
    moduloProcess(){
        /*
            Provee información sobre el proceso de Node.js que se esta ejecutando.
        */
        // console.log(process);
        // console.log(process.env);
        console.log(process.argv);
        // ["node...", "06_modulos_built_in.js", "arg01", "arg02"]
        // Example node 06_modulos_built_in.js arg01 arg02
        for(let i = 2; i < process.argv.length; i++){
            console.log(`Argumento ${i}: ${process.argv[i]}`);
        }
    }
    moduloOS(){
        /*
            Contiene información sobre el sistema operativo en el cual 
            se está ejecutando la aplicación.
        */
        const os = require('os');
        console.log(os.platform());
        console.log(os.type());
        console.log(os.hostname());
        console.log(os.arch());
        console.log(os.release());
        console.log(os.uptime());
        console.log(os.totalmem());
        console.log(os.freemem());
        // console.log(os.cpus());
        // console.log(os.networkInterfaces());
        console.log(os.homedir());
        console.log(os.userInfo());
        
        
    }
    moduloTimers(){
        /*
            1 seg = 1000 ms(milisegundos)

            Contiene funciones que ejecutan código luego de un 
            cierto periodo de tiempo. (simular operaciones asincronas)

            setTimeout() - Ejecuta una función después de esperar un tiempo
            clearTimeout() - Detiene la ejecución de setTimeout

            setInterval() - Ejecuta una función de manera continua cada cierto tiempo
            clearInterval() - Detiene la ejecución de setInterval

            setImmediate() - Ejecuta una función al final de la ejecución del Event Loop
                             (lo mas rápido posible de todos los eventos asíncronos)
        */

        const { mostrarRandomCurso, moduloOperation} = require('./05_utils');
        const curse = mostrarRandomCurso("Curso es: ");
        console.log(curse);

        // Un solo parametro
        setTimeout(() => {
            const curse2 = mostrarRandomCurso("Curso es: ");
            console.log(curse2);
        },500);

        // Multiples parametros
        setTimeout(moduloOperation, 600, 10,8);

        // SETIMMEDIATE
        console.log("Antes de setImmediate");
        setImmediate(moduloOperation, 15,7);
        console.log("Despues de setImmediate");

        // SETINTERVAL
        const interval = setInterval(() => {
            const curse3 = mostrarRandomCurso("Curso es: ");
            console.log(curse3);
        }, 1000);
    }
    moduloFS(){
        /*
            (Asincronos)
            Add Sync para volverlos sincronos:
                * fs.rename();
                *fs.renameSync();
            Este módulo contiene funcionalidad muy útil para trabajar con el 
            sistema de archivos.
            Archivo/Carpetas:
                Leer
                Modificar
                Copiar
                Eliminar
                Cambiar nombre
        */
        console.log("Modulo File System");
        const fs = require('fs');
        fs.readFile('index.html','utf-8', (err, content) => {
            if(err){
                // log(err);
                throw err;
            }else{
                log(content);
            }
            console.log("Fin del modulo FS");
        });

        // CAMBIAR EL NOMBRE DE UN ARCHIVO
        // fs.rename('index2.html', 'index.html', (err) => {
        //     if(err){
        //         log(err);
        //         throw err;
        //     }else{
        //         log("Archivo renombrado");
        //     }
        // });


        // AGREGAR CONTENIDO AL FINAL DE UN ARCHIVO
        // fs.appendFile('index.html', '<p>Hola</p>', (err) => {
        //     if(err) throw err;
        //     log('Archivo modificado');
        // } );

        // REEMPLAZAR TODO EL  CONTENIDO DEL ARCHIVO
        // fs.writeFile('index.html','COntenido nuevo', (err) => {
        //     if(err) throw err;
        //     log('Archivo reemplazado');
        // });

        // ELIMINAR UN ARCHIVO
        fs.unlink('main.html', (err) => {
            if(err) throw err;
            log('Archivo eliminado');
        });

    }
}

const myModule = new ModulosBuiltIn();
// myModule.moduloConsole();
// myModule.moduloProcess();
// myModule.moduloOS();
// myModule.moduloTimers();
myModule.moduloFS();