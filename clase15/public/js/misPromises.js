/*
let codigoTipico = callBack => {
   _.delay(() => {
      callBack(null, 'RESULTADO')
   }, 2000)
}

codigoTipico((err, resultado) => {
   if (err) {
      console.log(err)
      return
   }
   codigoTipico((err, resultado) => {
      if (err) {
         console.log(err)
         return
      }
      codigoTipico((err, resultado) => {
         if (err) {
            console.log(err)
            return
         }
         console.log('ESTE ES EL CALLBACK DE LA TERCERA FUNCION')
      })
   })
})

*/

let fnProm1 = (fallo) => {
   return new Promise((resolve, reject) => {
      console.log('Antes de entrar al delay')
      _.delay(() => {
         console.log('Dentro del delay')
         if (fallo) {
            reject(new Error('Aca ocurrio un fallo'))
         }
         else {
            resolve('TERMINADO EL DELAY !!!')
         }
      }, 2000)
   })
}

fnProm1(false)
.then(z => { console.log('El valor de z es: ' + z) })
.catch(err => { console.log(err) })

/*
Vamos a escribir tres funciones.
Dos de ellas van a ser asincronicas con Promise
Una de ellas va a ser sincronica con return
*/

/*
Luego vamos a explorar las dos promise una a la vez
Una va a fallar y otra va a dar ok.
*/
