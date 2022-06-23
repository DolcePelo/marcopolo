;(function (raizDeDondeCuelga) {

   let variableGlobal = 'Esto es una variable global'
   let entero = 0

   let fnInterna = () => {
      entero++
   }

   let funcionGlobal = () => {
      console.log(entero)
      fnInterna()
   }

   raizDeDondeCuelga.uno = {
      funcionLocal : funcionGlobal
   }

})(window.misapis)



