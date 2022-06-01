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
      })
      let formData = new FormData()
      formData.append('image', document.getElementById('image').files[0])
      xhr.send(formData)
   })
}