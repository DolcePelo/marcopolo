let _ = require('underscore')

let arrTrafico = [
   {tx: 200, rx: 200} , { tx: 100, rx: 101}, {tx: 10, rx: 1}
]

let total = _.reduce(arrTrafico, (acum, item) => {
   return {
      tx: acum.tx + item.tx,
      rx: acum.rx + item.rx
   }
}, {tx: 0, rx:0})

console.log(total)

/*
Ver que pasa cuando nos viene la info pero por estacion
Una estacion podria tener de 0 a n entradas por horarios
*/

