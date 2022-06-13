let todosLosUsuarios = []
window.resultados = todosLosUsuarios

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
*/

let consultarUsuarios = () => {
   // Consultar todo el array todosLosUsuarios

}