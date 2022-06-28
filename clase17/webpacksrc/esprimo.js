let _ = require('underscore')

let esDivisible = (dividendo, divisor) => dividendo % divisor === 0

// on finish hay que pasarle true/false
function esPrimo(arrNumerosPrimos, numero, onFinish) {

   // Mientras estamos en la etapa de construccion
   // podemos decir que true
   onFinish(true)
   return

   console.log('investigando: ' + numeroAIngestigar)

   ;(function fnNivel2(idx) {
      console.log('    comparando subindice: ' + idx)
      if (idx === arrNumerosPrimos.length - 1) {
         return
      }
      if (esDivisible(numeroAIngestigar, arrNumerosPrimos[idx])) {
         return
      }
      _.defer(fnNivel2, idx + 1)
   })(0)

   numeroAIngestigar++
   arrNumerosPrimos.push(numeroAIngestigar)
   _.defer(fnnivel1)
}

module.exports = esPrimo