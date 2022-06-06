const _ = require('underscore')

let arrEnteros = [2, 5, 2, 5, 7, 8, 9, 0]

// El segundo parametro es un predicado
// Un predicado es una funcion que va de T a Boolean
// Quiero que retorne los pares
let filtroPares = z => ((z % 2) == 0)
let filtroImpares = z => !filtroPares(z)

let setPares = _.uniq(_.filter(arrEnteros, filtroImpares))

console.log(setPares)

/*  */

let resultado = _.chain(arrEnteros)
.filter(filtroPares)
.uniq()
.value()

console.log(resultado)

/*
Tambien se puede hacer con una funcion prototype de array
*/

let resImpares = arrEnteros.filter(filtroImpares)
console.log(resImpares)



