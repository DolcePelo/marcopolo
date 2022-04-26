{
	//Crear variables
	let newInput = document.createElement('input')
	let button1 = document.createElement('button')

	//Setear atributos
	newInput.setAttribute('type','text')
	newInput.setAttribute('class','nuevoTexto')
	newInput.setAttribute('class','nuevoTexto')
	newInput.setAttribute('id','uname')
	newInput.setAttribute('name','uname')

	button1.setAttribute('type','submit')
	button1.setAttribute('name','formButton')
	button1.innerHTML = 'Aceptar'

	//Agregar elementos
	document.body.appendChild(newInput)
	document.body.appendChild(button1)

	//Mostrar alerta. Primera instancia
	button1.addEventListener('click', function(){ alert(newInput.value)})
	document.body.appendChild(button1)

	//Segunuda instancia
	function evento1(){
		let valor = newInput.value
		valor += ' ' + 'Validado'
		console.log(valor)
		alert(valor)
	}

	button1.addEventListener('click', evento1)
	document.body.appendChild(button1)

}