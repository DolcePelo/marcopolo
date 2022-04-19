// scope de las variables ()

/*
console.log('hola')

;(function funcion1() {
    {
        var var1 = 'Variable 1'
    }
    {
        console.log(var1)
    }
})()
*/

// Paradigma funcional
// functions as data

// function decirAlgo(fn) {
//     fn('Algo')
// }

// decirAlgo(function(z) {
//     alert(z + ' 1!')
//     alert(z + ' 2!')
//     alert(z + ' 3!')
// })

// Guarda con el single thread
// let miDisplay = document.getElementById('miDisplay');
// for (let x=1; x <= 1000000; x++) {
//     miDisplay.innerHTML = x
// }

// operador condicional
// let saldo = 100
// let disponible = (saldo >= 10000) ? 'tiene disp' : 'no tiene disp'
// alert(disponible)

// ejercicio.
// Tengo una funcion

// function operar(a, b, fnOperador) {
//     return fnOperador(a, b)
// }

// let suma = function(x1, x2) { return x1 + x2 }
// let resta = function(x1, x2) { return x1 - x2 }
// let convertirArray = function(x1, x2) { return [x1, x2]}

// let arrowSuma = (x1, x2) => x1 + x2
// let arrowResta = (x1, x2) => {
//     return x1 - x2
// }
// let arrowCovertirEnArray = (x1, x2) => [x1, x2]

// let resultado = operar(2, 3, convertirArray)
// alert(`el resultado es: ${resultado}`)

// tengo que llamar a operar con los valores de a y b y ademas
// pasarle la operacion que quiero realizar

// -------------------------------------------------

let miDisplay = document.getElementById('miDisplay');
function fnRecursiva(a) {
    console.log(a)
    _.delay(() => {
        miDisplay.innerHTML = a;
        fnRecursiva(a + 1)
    }, 1)
}

fnRecursiva(1)
