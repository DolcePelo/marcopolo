let logger = require('./lib/logger')('usoAsyncForLoop')
let _ = require('underscore')
let asyncForLoop = require('@arteysoft/asyncforloop')

let visible = true
asyncForLoop(10, (nroIteracion, next, abort) => {
    if (visible) {
        logger.info("Numero de iteracion: " + nroIteracion)
        visible = false
    }
    else {
        visible = true
    }

    _.delay(next, 2000)
},
() => {
    logger.info('termino todas las iteraciones')
})
