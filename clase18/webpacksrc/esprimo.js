let _ = require('underscore')

let esDivisible = (dividendo, divisor) => dividendo % divisor === 0

// on finish hay que pasarle true/false
function esPrimo(arrNumerosPrimos, numero, onFinish) {

   console.log('investigando: ' + numeroAIngestigar)

   ;(function fnNivel2(idx) {
      console.log('    comparando subindice: ' + idx)
      if (idx === arrNumerosPrimos.length - 1) {
         onFinish(true)
         return
      }
      if (esDivisible(numeroAIngestigar, arrNumerosPrimos[idx])) {
         onFinish(false)
         return
      }
      _.defer(fnNivel2, idx + 1)
   })(0)
}

window.testEsPrimo = esPrimo

module.exports = esPrimo