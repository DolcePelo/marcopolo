{
    let miForm = SEL('miFormulario')
    let claveValor = {}
    claveValor['codPais'] = 'chkCodPais'
    claveValor['inpNombre'] = 'chkNombre'

    miForm.addEventListener('submit', e => {
        e.preventDefault()
        console.log("Es valido: " + SEL('inpNombre').checkValidity())
        console.log("Es valido: " + SEL('codPais').checkValidity())
    })

    SEL('inpNombre').addEventListener('input', e => {
        if (e.target.value.length == 0) {
            SEL('chkNombre').className = 'iconito'
        }
        else {
            SEL('chkNombre').className = 'noIconito'
        }
    })

    SEL('codPais').addEventListener('input', e => {
        if (e.target.value.length == 0) {
            SEL('chkCodPais').className = 'iconito'
        }
        else {
            SEL('chkCodPais').className = 'noIconito'
        }

        if (e.target.value.length == 3) {
            SEL('chkCodPais').className = 'noIconito'
        }
        else {
            SEL('chkCodPais').className = 'iconito'
            // e.target.setCustomValidity('EL LARGO DEL CODIGO DE PAIS DEBE SER 3 DIG')
        }
    })


}

