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
   delete z['tipoDeDato']
   return td === 'object'
})

/*
objResultado.todosLosNumber = _.filter(arrCrudo, z => typeof z === 'number')
objResultado.todosLosBoolean = _.filter(arrCrudo, z => typeof z === 'boolean')
objResultado.todosLosString = _.filter(arrCrudo, (z, idx) => {
   console.log(idx)
   if (typeof z === 'string') {

   }

})
*/

console.log(objResultado)