{
    /*
    //          EN HTML
    <div>
        <div id="Tarea_C3">
            <h1>Tarea Clase 3</h1>
        </div>
    </div>
    */
    function t_clase3(){
        tareaParte1()
        Tarea_C3.appendChild(document.createElement('br'))  // Dos renglones para separar
        Tarea_C3.appendChild(document.createElement('br'))
        tareaCollatz()
    }
    function tareaParte1(){
    //--------------------------------------------------
    let input1 = document.createElement('input')    // Preparo una variable para a crear un input
    input1.type = 'text'                            // Al input lo configuro como texto
    input1.placeholder = 'Ingrese un valor'         // Se pone una leyenda para que se ingrese un valor
    input1.id = 'valor1'                            // y lo denomino con un id VALOR1
    Tarea_C3.appendChild(input1)                    // Lo creo en el HTML en "Tarea_3" (que es un div)
    //--------------------------------------------------
    let boton1 = document.createElement('button')   // Preparo una variable para crear un boton
    boton1.textContent = 'Mostrar Alert'            // El boton va a decir Mostar Alert
    boton1.addEventListener("click", alerta1)       // Si se genera un click sobre el boton llama a alerta1
    Tarea_C3.appendChild(boton1)                    // Se crea el boton el el HTML en el <div>
    //--------------------------------------------------
    let boton2 = document.createElement('button')   // Repito lo aterior pero ahora se llamara a incrementar1
    boton2.textContent = 'Incrementar'
    boton2.addEventListener("click", incrementar1)
    Tarea_C3.appendChild(boton2)
    //--------------------------------------------------
    valor1.focus()                                  // Al empezar que el cursor este en el INPUT para igresar datos
    //--------------------------------------------------
    }

    function tareaCollatz(){
    //--------------------------------------------------
    let input2 = document.createElement('input')    // Se crea como al principio otro INPUT llamado VALOR2
    input2.type = 'text'
    input2.placeholder = 'Ingrese un valor'
    input2.id = 'valor2'
    Tarea_C3.appendChild(input2)
    //--------------------------------------------------
    let boton3 = document.createElement('button')   // Ahora otro boton con la leyenda Conj d COLLATZ
    boton3.textContent = 'Conjetura de COLLATZ'
    boton3.addEventListener("click", collatz)       // Al hacer click llamara a la funcion collatz
    Tarea_C3.appendChild(boton3)
    //--------------------------------------------------
    }
    function alerta1(){                             // Funcion que muestra un alerta con el valor ingresado 1
        alert(document.getElementById('valor1').value)
    }
    //--------------------------------------------------
    function incrementar1(){                        // Funcion que muestra el valor mas uno (incrementado)
        let dato = document.getElementById('valor1').value
        let incremento = parseInt(dato)+1
        if (isNaN(incremento)){
            valor1.value = ''
            valor1.focus()
            alert(' Debe ingresar un dato valido')
        }
        else {valor1.value = ''; alert('Valor Incrementado: ' + incremento )}
    }
    //--------------------------------------------------
    function collatz(){                             // Funcion que muestra la conjetura de COLLATZ
        let dato = document.getElementById('valor2').value      // Obengo el valor ingresado
        let cont = 0                                // Creo un contador para contar la cant de operaciones
        //-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
        do{
            if (dato%2 == 0)  {dato /= 2}                   // si es par divido por dos
            else              {dato = (dato*3) + 1 }        // si es impar multiplico por 3 y sumo 1
                let parraf = document.createElement('h5')   // los voy mostrando uno a uno
                Tarea_C3.appendChild(parraf)
                parraf.innerHTML = dato
            cont ++                                         // cuento cuantas veces hago la operacion
        }while (dato > 1)                                   // Todo se realiza hasta que la cuenta llegue a uno
        //-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
        let parraf = document.createElement('h4')           // Muestro el contador.
        Tarea_C3.appendChild(parraf)
        parraf.innerHTML = 'Veces ejecutadas: ' + cont
    }
}