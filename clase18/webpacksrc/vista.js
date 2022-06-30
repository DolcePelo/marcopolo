let Mustache = require('mustache')

let arrUltimos10 = []
let TEMPLATE_HTML_NUMERO_ACTUAL = null
let TEMPLATE_HTML_TAB_NUMEROS_PRIMOS = null

function setearNumeroActual(nroActual) {
   if (TEMPLATE_HTML_NUMERO_ACTUAL === null) {
      // se lee el html template
   }
   // Mustache.render(TEMPLATE_HTML_NUMERO_ACTUAL, nroActual)
   document.getElementById('mostrarNum').innerText = nroActual
   // Copiamos el template de html
   // Colocarlo en un singleton
   // Aplicarle mustache
   // volver a renderizar
}

function setearUltimoNumeroPrimoDescubierto(zs) {
   arrUltimos10.push(arrUltimos10)
   zs = zs.slice(-10)

   if (TEMPLATE_HTML_TAB_NUMEROS_PRIMOS === null) {
      TEMPLATE_HTML_TAB_NUMEROS_PRIMOS =
               document.getElementById('miTabla').innerText
   }


   let outHTML = Mustache.render(
      TEMPLATE_HTML_TAB_NUMEROS_PRIMOS,
      { primos: zs })

   document.getElementById('arrayPrimos').innerHTML = outHTML
}

module.exports = {
   setearNumeroActual,
   setearUltimoNumeroPrimoDescubierto
}
