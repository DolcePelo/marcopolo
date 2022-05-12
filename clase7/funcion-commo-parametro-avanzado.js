let logger = require('./lib/logger')('funcion-como-parametro')

/*
Lo primero que hay que entender es el concepto de
functions as data.
Este concepto, lo que hace es pensar a las funciones
como un tipo de dato mas y no como un tipo especial
de dato.
*/

function miFuncion(fn1, fn2) {
    logger.info('Linea 1 de miFuncion')
    logger.info('voy a ejecutar fn1')
    fn1('param1', 'param2')
    logger.info('ya ejecute fn1')
    logger.info('voy a ejecutar fn2')
    fn2();
    logger.info('ya ejecute fn2')
}

function unaFuncionMia1(a, b, c) {
    logger.info('estoy dentro de una funcion mia 1')
    logger.info(a)
    logger.info(b)
    logger.info(c)
}

function unaFuncionMia2() {
    logger.info('Estoy dentro de una funcion mia 2')
}

miFuncion(unaFuncionMia1, unaFuncionMia2)
