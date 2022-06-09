
let arr = [1, 4, 8, 4, 9]
let otroArr = []

for (let x = 0; x < arr.length; x++) {
   otroArr.push({ numero: arr[x]})
}

console.log(otroArr)

let nuevoArr = arr.map(z => ({numero: z}))

console.log(nuevoArr)

