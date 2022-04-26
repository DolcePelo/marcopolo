// conjetura de collatz

let numero = parseInt(prompt("Porfavor ingrese un numero"))
let n = numero
let esPar = n => (n % 2 == 0)
let partir = n => n / 2
let aplicarFormulaCollatz = n => (n * 3 ) + 1
let estaEnLoop = n => (n===1)

while(!estaEnLoop(n)) {
    console.log(n)
    n = esPar(n) ? partir(n) : aplicarFormulaCollatz(n)
}
