let logger = require('./lib/logger')('async1')
let _ = require('underscore')

function unaFuncionCualquiera() {
    logger.info('una funcion cualquiera ')
    setTimeout(unaFuncionCualquiera, 4000)
    logger.info('ya la encole')
}

unaFuncionCualquiera()