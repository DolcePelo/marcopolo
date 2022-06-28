let mustache = require('mustache')

let arrUltimos10 = []
let TEMPLATE_HTML_NUMERO_ACTUAL = null
let TEMPLATE_HTML_TAB_NUMEROS_PRIMOS = null

function setearNumeroActual(nroActual) {
   if (TEMPLATE_HTML_NUMERO_ACTUAL === null) {
      // se lee el html template
   }
   Mustache.render(TEMPLATE_HTML_NUMERO_ACTUAL, nroActual)
   // Copiamos el template de html
   // Colocarlo en un singleton
   // Aplicarle mustache
   // volver a renderizar
}

function setearUltimoNumeroPrimoDescubierto(z) {
   arrUltimos10.push(arrUltimos10)
   arrUltimos10 = arrUltimos10.slice(-10)

   if (TEMPLATE_HTML_TAB_NUMEROS_PRIMOS === null) {
      // se lee el template
   }


   Mustache.render(TEMPLATE_HTML_TAB_NUMEROS_PRIMOS, )
   // Copiar el template de HTML a una variable
   // Colocarlo en un objeto Singleton
   // Aplicarle mustache.. combinarlo con el arrUltimos10
   // Volver a renderizar
}