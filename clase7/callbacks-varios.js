let logger = require('./lib/logger')('funcion-como-parametro')
let _ = require('underscore')

/*
Lo primero que hay que entender es el concepto de
functions as data.
Este concepto, lo que hace es pensar a las funciones
como un tipo de dato mas y no como un tipo especial
de dato.
*/

function unaFuncionCualquiera(nroDeVez) {
    logger.info('Este es el comentario de una funcion cualquiera: ' + nroDeVez)
}

_.times(10, unaFuncionCualquiera)

