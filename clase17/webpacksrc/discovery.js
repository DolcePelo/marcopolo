let loopSinRango = require('./LoopSinRango')
let _ = require('underscore')
let esPrimo = require('./esprimo')

let eventos = {
   onActualNumber: z => z,
   onNewNumberFound : z => z
}

let arrPrimeNumbersFound = []

let esDivisible = (dividendo, divisor) => dividendo % divisor === 0

let start = nroComienzo => {
   // Aca vamos a hacer otra imple de asyncForLoop
   // Que no tenga rango sino numero de inicio
   loopSinRango(nroComienzo, (nroActual, next, abort) => {
      _.delay(() => {
         eventos.onActualNumber(nroActual)
         esPrimo(1, 2, z => {
            if (z) {
               eventos.onNewNumberFound(z)
            }
            if (nroActual < 1030) {
               next()
               return
            }
            abort('Llego a 1030')
         });
      }, 1000)
   }, e => {
      console.log('aborto x: ' +  e)
   })
}

module.exports = {
   start,
   stop : () => {},
   setFoundNumbers : () => {},
   setOnNewNumberFound: fn => { eventos.onNewNumberFound = fn },
   setOnActualNumber: fn => { eventos.onActualNumber = fn }
}