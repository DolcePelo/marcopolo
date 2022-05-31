function blanquear(){
    let misInput = document.querySelectorAll('input.form-control')
    misInput.forEach((unInput) => unInput.value='')
    SEL('btnGuardar').classList.remove('botonVisible')
    SEL('btnGuardar').classList.add('botonInvisible')
}

function Crear() {
    fetch('/api/inventarUsuario')
        .then(z => z.json())
        .then(z => {
            for(const property in z) SEL(`p${property}`).value = z[property]

            SEL('btnGuardar').classList.remove('botonInvisible')
            SEL('btnGuardar').classList.add('botonVisible')
        })
}

function tomarFormulario() {
    const objeto = {id:'',firstName:'',lastName:'',city:'',country:''}
    for(const valorinput in objeto) objeto[valorinput] = SEL(`p${valorinput}`).value
    return objeto
    /*
    Como opcional, se puede usar el querySelectorAll
    let objeto = {}
    _.map(document.querySelectorAll('.js-inputcontrol'), z => objeto[z.id.substring(1)] = z.value);
    return objeto
    */
}

function Guardar() {
    let persona = tomarFormulario()
    console.log('persona:',persona)

    fetch('/api/usuario', {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
           'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify(persona)
     })
     .then(function(response) {
        console.log('response =', response);
        return response.json();
     })
     .then(datos => {
        console.log(datos)
     })
     .catch(function(err) {
        console.error(err);
     });

    blanquear()
    Visualizar()
}

function Visualizar(){
    fetch('/api/usuario')
    .then(z => {
    //console.log('codigo de respuesta HTTP: ' + z.status)
    if (z.status === 200) {
        return z.json()
    }
    })
    .then(personas => {
        let enviarpersonas = {personas}
        let tmpl = document.getElementById('tmplTabla').innerHTML
        document.getElementById('miDisplay').innerHTML = Mustache.render(tmpl, enviarpersonas)
    })
}

atraparClickPorId('btnCrear',Crear)
atraparClickPorId('btnGuardar',Guardar)
blanquear()
Visualizar()