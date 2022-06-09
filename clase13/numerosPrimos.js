/*
Numero primeros son aquellos divisibles por uno y por si mismo
Ahora bien, como descubrirlos ?

tomo un x si es 1 ? lo agrego en el array de numerosPrimos
si es > 1 lo divido por cada uno de los elementos del array
si la division por alguno es exitosa ? NO ES PRIMO LO DESCARTO
si la division en ningun caso es exitosa ? es primo.
Por ende lo agrego al array.
Divisible es que a % b === 0
*/

let numeroPrimos = []

