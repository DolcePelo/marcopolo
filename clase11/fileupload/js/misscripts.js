function crearObjetoUpoad(idFormulario, endpoint, nombreArchivo, progresCallBack) {
   document.addEventListener('submit', e => {
      e.preventDefault()
      if (e.target.id === idFormulario) {
         let xhr = new XMLHttpRequest()
         xhr.open('POST', endpoint)
         xhr.upload.addEventListener('progress', metadata => {
            progresCallBack(metadata.loaded, metadata.total)
         })
         let formData = new FormData()
         formData.append(nombreArchivo,
               document.getElementById(nombreArchivo).files[0])
         xhr.send(formData)
      }
   })
}

let objParam = {
   nombreForm: 'miForm',
   endpoint: 'upload.php',
   nombreArchivo : 'image',
   callBack: (subido, total) => {
      // Aca ponemos la logica del callback
   }
}

crearObjetoUpoad('miForm', 'upload.php', 'image', (subido, total) => {
   document.getElementById('barraProgreso').setAttribute("min", "0")
   document.getElementById('barraProgreso').setAttribute("max", total)
   document.getElementById('barraProgreso').value = subido
   document.getElementById('bytesSubidos').innerHTML = subido / 1000

})

/*
{
   let formulario = document.getElementById('miForm')
   formulario.addEventListener('submit', e => {
      e.preventDefault()
      console.log('click en submit')
      let xhr = new XMLHttpRequest()
      xhr.open('POST', 'upload.php')
      xhr.upload.addEventListener('progress', metadata => {
         console.log(metadata.loaded)
         console.log(metadata.total)
         document.getElementById('barraProgreso').setAttribute("min", "0")
         document.getElementById('barraProgreso').setAttribute("max", metadata.total)
         document.getElementById('barraProgreso').value = metadata.loaded
      })
      let formData = new FormData()
      formData.append('image', document.getElementById('image').files[0])
      xhr.send(formData)
   })
}
*/

/* Como podemos hacer para que un componente sea reutilizable
Yo podria plantearme, crear un objeto donde este se encargue de
reaccionar ante un submit y subir un archivo.

Por otra parte, ese mismo objeto, deberia reportar el progreso
en la subida del archivo

La cosa seria mas o menos asi.

let objUpload = crearObjetoUpload(...)
objUpload va a escuchar un determinado submit
objUpload va a reportar unos eventos de avance

Esto sirve para que yo pueda reutilizar el componente
para otros casos futuros.

*/