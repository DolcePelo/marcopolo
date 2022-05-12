let logger = require('./lib/logger')('async1')
let _ = require('underscore')

function unaFuncionCualquiera() {
    logger.info('una funcion cualquiera ')
    logger.info('Ya deberia terminar el proceso')
}

logger.info('Antes de encolar la funcion')
setTimeout(unaFuncionCualquiera, 2000)
logger.info('despues de encolar la funcion')


