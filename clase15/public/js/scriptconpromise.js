/*
La idea es que para el miercoles 22, podamos tener el mismo
scrip de misscripts pero modularizado y utilizando promise
*/

let todosLosUsuarios = []
window.resultados = todosLosUsuarios

let arrayReporte = []

let iterar100CargarTodosLosUsuarios = () => {
   return new Promise((resolve, reject) => {
      asyncForLoop(100, (idx, next, abort) => {
         console.log('Numero de Iteracion: ' + idx)
         fetch('/api/obtenerusuarios')
         .then(z => z.json())
         .then(z => {
            console.log(z)
            todosLosUsuarios.push(...z)
            next()
         })
         .catch(err => {
            abort(err)
         })
      }, (err) => {
         if (err) {
            reject(err)
            return
         }
         resolve()
      })
   })
}

let agruparPorPaisYAlertarSiSuperUnMonto = () => {
   let paso1 = _.map(todosLosUsuarios, z => {
      return {country: z.country, amount: Number.parseFloat(z.amount)}
   })

   console.log(paso1)

   let paso2 = _.groupBy(paso1, z => {
      return z.country
   })

   // Ejemplo de como queda paso2 es: 'ARG': [
   //   { country:'ARG', amount:999 }, { country:'ARG', amount:999 }
   //  ]

   console.log(paso2)

   let keys = _.keys(paso2)

   console.log(keys)

   return keys
}


////////////////////////////////////////////////
// ACA DONDE VAMOS A INVOCAR A TODO EL CODIGO
////////////////////////////////////////////////

iterar100CargarTodosLosUsuarios()
.then(() => agruparPorPaisYAlertarSiSuperUnMonto())
.then(keys => { console.log('por ahora solo keys' + keys); return 'SIIIII UJJAA' })
.then(mensaje => console.log(mensaje))
.catch(err => console.log(err))

/*
El desafio es, que la funcion que estoy trasladando aca,
tenia una parte sincronica, ya trasladada y una parte
asincronica.
Hay que escribir la parte asincronica en otra funcion
invocandola con then

LO UTLIMO. array Reporte, seria bueno mostrarlo en pantalla.
Pais, Monto Total
z.country, z.amount
*/

