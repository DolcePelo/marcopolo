let _ = require('underscore')

let esDivisible = (dividendo, divisor) => dividendo % divisor === 0

// on finish hay que pasarle true/false
function esPrimo(arrNumerosPrimos, numeroAIngestigar, onFinish) {

   console.log(arrNumerosPrimos)

   function fnNivel2(idx) {
      console.log('    comparando subindice: ' + idx)
      if (idx === arrNumerosPrimos.length) {
         onFinish(true)
         return
      }
      if (esDivisible(numeroAIngestigar, arrNumerosPrimos[idx])) {
         onFinish(false)
         return
      }
      _.defer(fnNivel2, idx + 1)
   }
   _.defer(fnNivel2, 0)

   return 'IN PROGRESS'
}

window.testEsPrimo = esPrimo

module.exports = esPrimo