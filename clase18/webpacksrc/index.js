let fn = require('./modulito')
let underscore = require('underscore')
let grabarLocalStorage = require('./grabarLocalStorage')
let discovery = require('./discovery')
let vista = require('./vista')

discovery.setOnActualNumber(z => {
   console.log('-----------------------')
   console.log(z)
   console.log('-----------------------')
   vista.setearNumeroActual(z)
   // Aca poner el vista el numero actual a la derecha
})

let arrTemporal = [2]

discovery.setOnNewNumberFound(z => {
   arrTemporal.push(z)
   console.log('UAAAAAAAAAAAAa SE ENCONTRO UN NUMERO PRIMO !!! ' + z)
   vista.setearUltimoNumeroPrimoDescubierto(arrTemporal)
})

discovery.start(3)