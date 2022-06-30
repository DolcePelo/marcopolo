let loopSinRango = require('./LoopSinRango')
let _ = require('underscore')
let esPrimo = require('./esprimo')

let eventos = {
   onActualNumber: z => z,
   onNewNumberFound : z => z
}

let arrPrimeNumbersFound = [2]

let start = nroComienzo => {
   // Aca vamos a hacer otra imple de asyncForLoop
   // Que no tenga rango sino numero de inicio
   loopSinRango(nroComienzo, (nroActual, next, abort) => {
      _.delay(() => {
         eventos.onActualNumber(nroActual)
         esPrimo(arrPrimeNumbersFound, nroActual, z => {
            if (z) {
               arrPrimeNumbersFound.push(nroActual)
               eventos.onNewNumberFound(nroActual)
            }
            next()
         });
      }, 0)
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