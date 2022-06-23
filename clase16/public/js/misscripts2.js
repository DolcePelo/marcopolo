window.misapis.dos = (function () {

   let variableGlobal = 'Esto es una variable global'
   let entero = 10000

   let fnInterna = () => {
      entero = entero + 100
   }

   let funcionGlobal = () => {
      console.log(entero)
      fnInterna()
   }

   return {
      funcionLocal : funcionGlobal
   }

})()