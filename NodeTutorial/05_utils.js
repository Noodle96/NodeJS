const listaCursos = ["Analisis Matematica 2","Algebra linea 1", "Analisis numérico", "Optimizacion Lineal", "Topología"];

const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}

const saludar = () => {
    console.log('¡Hola Mundo!');
}

const mostrarRandomCurso = (prefijo) => {
    if(listaCursos.length > 0){
        const randomIndex = Math.floor(Math.random() * listaCursos.length);
        return prefijo+" " +listaCursos[randomIndex];
    }else{
        return prefijo + " Lista de cursos vacía";
    }
}

const moduloOperation = (a,b) => {
    console.log("Modulo es: " + a % b);
}

module.exports = {
    sayHi: sayHi,
    saludar: saludar,
    mostrarRandomCurso: mostrarRandomCurso,
    moduloOperation: moduloOperation
}