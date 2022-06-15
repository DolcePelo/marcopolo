let todosLosUsuarios = []
window.resultados = todosLosUsuarios

let arrayReporte = []

{
   asyncForLoop(100, (idx, next, abort) => {
      console.log('Numero de Iteracion: ' + idx)
      fetch('/api/obtenerusuarios')
      .then(z => z.json())
      .then(z => {
         console.log('Respuesta: ' + idx)
         console.log(z)
         todosLosUsuarios.push(...z)
         next()
      })
      .catch(err  => {
         abort(err)
      })
   }, (err) => {
      if (err) {
         console.log('TERMINO CON UN ERROR')
         console.log(err)
         return
      }
      // Engancharlo con otro codigo
      agruparPorPaisYAlertarSiSuperUnMonto()
   })
}

/*
Hacer el siguiente ejercicio:
Recorrer el array, todosLosUsuarios y consultar
usuario por usuario
la sintaxis seria
fetch('/api/usuario/170f75d6-5f3c-4f6f-9843-a62c39ba6e9c')
Pongo el id que corresponde
Solo consultar usuarios que tengan saldo mayor a 500
ESTE LO DEJAMOS COMO TAREA PARA LA PROXIMA O PARA EL
MIERCOLES 15 o 22
*/

/*
Siguiente ejercicio que vamos arrancar en clase, pero
tambien es para seguir trabajando.
Quiero agrupar por pais, y si un determinado pais
supera un determino monto en cuentas bancarias
alertar sobre esto.
*/



let agruparPorPaisYAlertarSiSuperUnMonto = () => {

   // 1) Que necesito para agrupar por country y ammount
   // Solo necesito esos dos campos
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

   _.forEach(keys, key => {
      console.log('una key: ' + key)
      let arrParaEstaKey = _.map(paso2[key], z => z.amount)
      console.log(arrParaEstaKey)
      let totalParaEstaKey = _.reduce(arrParaEstaKey, (acum, item) => {
         return acum + item
      }, 0)
      totalParaEstaKey = Math.floor(totalParaEstaKey)
      console.log(totalParaEstaKey)

      if (totalParaEstaKey > 25000) {
         arrayReporte.push({country : key, totalAmount: totalParaEstaKey })
      }

      console.log('------------------------------')
      console.log(arrayReporte)
      /*
      En este foreach, aparecen cada una de las keys que son
      los paises
      la idea es: Hacer un reduce sobre los montos de cada
      uno de los paises.
      Luego, vovler a recorrer el resultado y si un determinado
      pais, tiene una suma total de x entonces alertar
      sobre el monto que tiene ese pais.
      */
   })

   asyncForLoop(arrayReporte.length, (idx, next, abort) => {
      let itemProcesar = arrayReporte[idx]
      fetch('/api/informar/' + itemProcesar.country)
      .then(z => z.json())
      .then(z => {
         console.log('Respuesta: ' + idx)
         console.log(z)
         next()
   })
   .catch(err  => {
      abort(err)
   })
   }, err => {
      console.log(err?err:'SALIO SIN PROBLEMAS')
   })
}

/*
Donde quiero llegar ?
Utilizar la composicion pero en vez de hacer esto

_.reduce(_.groupBy(_.map()))

_.chain()
 .map()
 .groupBy()
 .reduce()
 .value()
*/