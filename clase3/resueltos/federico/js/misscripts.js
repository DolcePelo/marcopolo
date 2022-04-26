
function colattz(n) {
    if (n > 0 ) {
        while (n !== 1) {
            if (n % 2 === 0) {
                n = n / 2
            } else if (n % 2 !== 0) {
                n = (n * 3) + 1
            }
        }
    } else {
        alert('solo numeros enteros!')
    }}

    console.log(colattz)


let input = document.createElement('input')
     input.type = "text"
     input.placeholder = 'ingrese texto'
     input.id = 'inputText'
     document.body.appendChild(input)


     let btn = document.createElement('button')
     btn.textContent = 'Leer'
     document.body.appendChild(btn)
     btn.addEventListener('click', () => {
         let text = document.getElementById('inputText').value
         alert(text)
     })
