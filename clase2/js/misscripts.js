// Tipos de datos

/*
function recibeUnTipoDeDato(z) {
    //z. = 'Hola amigos'
}

{
    let var1 = {
        nombre: 'Santiago',
        apellido: 'Rodriguez',
        campeonatos: [2015, 1018, 2021]
    }
    var1 = [1,2,3,4,5]
    var1 = 'hola'

    recibeUnTipoDeDato(_.clone(var1))
    document.getElementById('miDisplay').innerHTML =
                                    JSON.stringify(var1)
}
*/

/* Primera aproximacion al manejo de eventos
{
    let miDisplay = document.getElementById('miDisplay')
    function cambiarTamanio() {
        miDisplay.innerHTML = window.innerWidth
    }
    window.addEventListener('resize', cambiarTamanio)
}
*/


function crearLista(arrayTxt) {
    let ul = document.createElement('ul')
    // for (let x = 0; x < arrayTxt.length -1; x++) {}
    for (let item of arrayTxt) {
        let li = document.createElement('li')
        li.innerHTML = item
        ul.appendChild(li)
    }
    document.body.appendChild(ul)
}

/*
Ejercicio: Crear 10 elementos en una lista. y agregarlas al dom

Luego de esto. Crear una funcion que tome como argumento un array
y agregue en la lista todos los elementos del array
['item uno', 'item 2', 'item 3']
*/

// Acerca de Mustache

{
    let miDisplay = document.getElementById('miDisplay')
    let tmpl = 'Hola, mi nombre es {{nombre}}'
    let objeto = {nombre:'Anita'}

    let renderFinal = Mustache.render(tmpl, objeto)
    miDisplay.innerHTML = renderFinal
}