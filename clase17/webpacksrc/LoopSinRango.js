/** Cant Iteraciones
* Callback nroIteracion:Integer, next:Function, abort: Function(Err)
*/

function loopSinRango(nroComienzo, callBack, onFinish) {
   if (onFinish === undefined) {
       onFinish = z => {}
   }
   (function innerFunction(iteracionActual) {
       callBack(iteracionActual, () => {
           // next
           setTimeout(()=>{
               innerFunction(iteracionActual+1)
           },0)
       }, (err) => {
           // abort
           onFinish(err)
       })
   })(nroComienzo)
}

module.exports = loopSinRango

