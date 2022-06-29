let fn = require('./modulito')
let underscore = require('underscore')
let grabarLocalStorage = require('./grabarLocalStorage')
let discovery = require('./discovery')

discovery.setOnActualNumber(z => {
   console.log('-----------------------')
   console.log(z)
   console.log('-----------------------')
   // Aca poner el vista el numero actual a la derecha
})
discovery.setOnNewNumberFound(z => {
   console.log('UAAAAAAAAAAAAa SE ENCONTRO UN NUMERO PRIMO !!! ' + z)
   // Poner los ultimos 10 numeros primos encontrados
})

discovery.start(3)