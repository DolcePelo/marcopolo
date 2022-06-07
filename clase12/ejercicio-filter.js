const _ = require('underscore')

/*
Crear un objeto que este organizado por tipo de datos
El tipo crudo de dato ? es el siguiente array
*/

let arrCrudo = [{}, [], 2, true, {a:1}, 'hola', false, [2,3,5], 'chau']

// Averiguar cual es el typeof de cada uno de los elementos
// Luego voy a filtrar con _.filter cada uno de los tipos de datos
// luego voy a componer un objeto que tenga como key el tipo de
// dato x ejemplo String, Object, Boolean, Number
// y el value, un array con los valores encontrados de ese tipo
// de dato

let arrPosicionMasTipo = _.map(arrCrudo, (z, idx) => {
   return {
      posicion: idx,
      tipoDeDato : typeof z,
      valor: z
   }
})

console.log(arrPosicionMasTipo)


let objResultado = {}
objResultado.todosLosObjetos = _.filter(arrPosicionMasTipo, z => {
   let td = z.tipoDeDato
   return td === 'object'
})

objResultado.todosLosNumber = _.filter(arrPosicionMasTipo, z => {
   let td = z.tipoDeDato
   return td === 'number'
})

objResultado.todosLosBoolean = _.filter(arrPosicionMasTipo, z => {
   let td = z.tipoDeDato
   return td === 'boolean'
})

objResultado.todosLosString = _.filter(arrPosicionMasTipo, (z, idx) => {
   let td = z.tipoDeDato
   return td === 'string'
})

console.log('Ahora vamos a remover todos los tipoDeDato')

_.forEach(objResultado, xs => {
   console.log('---------------------')
   _.forEach(xs, z => {
      delete z['tipoDeDato']
   })
   // console.log(xs)
})

console.log(objResultado)
