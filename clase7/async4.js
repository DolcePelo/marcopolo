let logger = require('./lib/logger')('async4')
let _ = require('underscore')

function unaFuncionCualquiera(funciones) {
    logger.info('voy a invocar a fn pero a los 3 segundos ')
    for (let x = 0; x < funciones.length; x++) {
        setTimeout(funciones[x], x * 2000)
    }
    logger.info('ya las encole a las ' + funciones.length)
}

unaFuncionCualquiera([
    () => { console.log('funcion 1') },
    () => { console.log('funcion 2') },
    () => { console.log('funcion 3') },
    () => { console.log('funcion 4') },
])

/*
1) unaFuncionCualquiera recibe un array de funciones
2) voy a encolar cada una de las funciones del array
   con un segundo de diferencia
*/