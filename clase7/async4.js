let logger = require('./lib/logger')('async1')
let _ = require('underscore')

function unaFuncionCualquiera(fn) {
    logger.info('voy a invocar a fn pero a los 3 segundos ')

    logger.info('ya la encole')
}

unaFuncionCualquiera(() => {
    logger.info('estoy dentro del callback')
})

/*
donde deberia poner el setTimeout para que llame al callback
como minimo a los 3000 ms
*/