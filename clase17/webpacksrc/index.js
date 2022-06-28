let fn = require('./modulito')
let underscore = require('underscore')
let grabarLocalStorage = require('./grabarLocalStorage')
let discovery = require('./discovery')

discovery.setOnActualNumber(z => {
   console.log('-----------------------')
   console.log(z)
   console.log('-----------------------')
})
discovery.setOnNewNumberFound(z => {
   console.log('UAAAAAAAAAAAAa SE ENCONTRO UN NUMERO PRIMO !!! ' + z)
})

discovery.start(1000)