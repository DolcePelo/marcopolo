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
    fn1()
    logger.info('ya ejecute fn1')
    logger.info('voy a ejecutar fn2')
    fn2();
    logger.info('ya ejecute fn2')
}

function unaFuncionMia1() {
    logger.info('estoy dentro de una funcion mia 1')
}

function unaFuncionMia2() {
    logger.info('Estoy dentro de una funcion mia 2')
}

miFuncion(unaFuncionMia1, unaFuncionMia2)

/*
Ejercicio 1: Si tocar NINGUNA FUNCION
Que salga en el output

Linea 1 de miFuncion
voy a ejecutar fn1
estoy dentro de una funcion mia 1
estoy dentro de una funcion mia 1
estoy dentro de una funcion mia 1
estoy dentro de una funcion mia 1
estoy dentro de una funcion mia 1
ya ejecute fn1
voy a ejecutar fn2
Estoy dentro de una funcion mia 2
ya ejecute fn2
*/



