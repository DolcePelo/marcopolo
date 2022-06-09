let _ = require('underscore')

let arrNumerosPrimos = [2]
let numeroAIngestigar = 3

let esDivisible = (dividendo, divisor) => dividendo % divisor === 0

;(function fnnivel1() {
   // tengo que pasar el numero a investigar por todos
   // ls elementos del array para ver si alguno es
   // divisible
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
})()