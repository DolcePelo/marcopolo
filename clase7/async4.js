let logger = require('./lib/logger')('async4')
let _ = require('underscore')

function unaFuncionCualquiera(funciones) {
    logger.info('voy a invocar a fn pero a los 3 segundos ')

    logger.info('ya la encole')
}

unaFuncionCualquiera(() => {
    logger.info('estoy dentro del callback')
})

/*
1) unaFuncionCualquiera recibe un array de funciones
2) voy a encolar cada una de las funciones del array
   con un segundo de diferencia
*/