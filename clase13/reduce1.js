const _ = require('underscore')

let arr = [2, 6, 8, 3, 8, 11]

let total = _.reduce(arr, (acumulado, valorSubActual) => {
   return acumulado * valorSubActual
}, 1)

////////////////////////////////////////////////////

let arrV = [
   { nombre : 'Luis', ventas: 3, fecha: 8},
   { nombre : 'Marta', ventas: 4, fecha: 8},
   { nombre : 'Santino', ventas: 2, fecha: 6},
   { nombre : 'Marta', ventas: 4, fecha: 6},
]

/*
Agrupar por vendedor cantidad de ventas sin importar el dia.

*/

let objVendedorCantVentas = {}
_.forEach(arrV, z => {
   if (!objVendedorCantVentas[z.nombre]) {
      // console.log(z.nombre + ' primera vez')
      objVendedorCantVentas[z.nombre] = {}
      objVendedorCantVentas[z.nombre].ventas = z.ventas
      return
   }
   // console.log(z.nombre)
   // console.log(objVendedorCantVentas[z.nombre].ventas + ' ventas ant')
   objVendedorCantVentas[z.nombre].ventas += z.ventas
   // console.log(objVendedorCantVentas[z.nombre].ventas + ' ventas acum')
})

console.log(objVendedorCantVentas)

/*
La primera vez vendira en acumulado un objeto vacio
el item a procesar

en el acumulado, tendria que preguntar si la key existe

Si la key NO existe ? return {
   z.nombre,
   {ventas: z.ventas}
}

La siguiente vez, el acumulado ya va a tener la key con
el nombre

ahi return {
   z.nombre,
   ventas: acum.ventas + z.ventas
}

*/