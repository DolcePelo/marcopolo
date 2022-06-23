

let dinero = SEL('dineroApostado')
let mas = SEL('dineroMas')
let menos = SEL('dineroMenos')
let balance = SEL('balance')
let apuesta = SEL ('apuesta')
let mesa = SEL('numerosMesa')
let opciones = SEL ('ParteAbajoB')
let letra = SEL('numApostado')
let modo1 = SEL('status')
let parNon = ''
let cApostado = ''
let pApostado = ''
modo1.innerText = "Hagan sus apuestas ! !"

mas.addEventListener("click", ()=>{
    modo1.innerText = "Hagan sus apuestas ! !"
    let dinA = dinero.innerText.split('$')
    dinero.innerText = '$ ' + (parseInt(dinA[1])+5)
    //-------------------------------------------
    let din = balance.innerText.split('$')
    balance. innerText = '$ ' + (parseInt(din[1])-5)
})

menos.addEventListener("click", ()=>{
    modo1.innerText = "Hagan sus apuestas ! !"
    let dinA = dinero.innerText.split('$')
    if(parseInt(dinA[1]) != 0){
        dinero.innerText = '$ ' + (parseInt(dinA[1])-5)
        //-------------------------------------------
        let din = balance.innerText.split('$')
        balance.innerText = '$ ' + (parseInt(din[1])+5)
    }
    else{dinero.innerText = '$ 0'}
})

mesa.addEventListener("click",(e)=>{
    //console.log(e.path[1].id)         // informa que docena se aposto
    let numeroApo = e.path[0].id
    if(numeroApo != 'x'){
        numeroApo.split('n')
        numeroApo = parseInt(numeroApo[1]+numeroApo[2])
        letra.innerText = numeroApo
    }
})

let colorApo = document.getElementsByName('color')
let parApo = document.getElementsByName('parNon')

opciones.addEventListener("click",(e)=>{
    let Click = e.path[0].id
    switch(Click){
        case 'rojo':{
            colorApo[0].checked = true; cApostado = 'Rojo'; break; }
        case 'negro':{
            colorApo[1].checked = true; cApostado = 'Negro'; break; }
        case 'par':{
            parApo[0].checked = true; pApostado = 'Par'; break; }
        case 'impar':{
            parApo[1].checked = true; pApostado = 'Non'; break; }
    }
})

let gan = SEL('ganados')
let per = SEL ('perdidos')
let jug = SEL ('jugados')
let ganColor = SEL('ganColor')
let ganPar = SEL('ganPar')
let dGan = SEL('dineroGan')
let dPerd = SEL('dineroPer')

apuesta.addEventListener("click",()=>{
    let numApostado = parseInt(SEL('numApostado').innerText)
    SEL('RuletaFija').style.display = 'none'
    SEL('RuletaGirando').style.display = 'block'
    modo1.innerText = " No va mas ! ! "
    let suerte = numeroAleatorio()                  // Genero un numero aleatorio entre 0 y 36
    let colorApo = queColor(suerte)                 // Que color corresp al nro: 'rojo', 'negro' o 'cero'
    setTimeout(()=>{
        modo1.innerText = " Salio el numero: " + colorApo + " " + suerte
        let dinA = dinero.innerText.split('$')              // se separa string [$ valor] del dinero apostado
        let dinP = dPerd.innerText.split('$')               // se separa string [$ valor] del contador Dinero perdido
        let dinG = dGan.innerText.split('$')                // se separa string [$ valor] del contador Dinero ganado
        let din = balance.innerText.split('$')              // se separa string [$ valor] del balance
        if (suerte == numApostado) {
            gan.innerText = parseInt(gan.innerText) + 1     // Si gano incremento cont Ganados
            modo1.innerText += " - GANO ! ! ! "
            //------------------------------------------
            let GanoPleno = parseInt(dinA[1]) * 35                      // Calculo de cuanto gano segun lo apostado x 35
            dineroGan.innerText = '$ '+ (GanoPleno + parseInt(dinG[1])) // Se carga el calculo en el cont de Dinero ganado
            balance.innerText = '$ ' + (GanoPleno + parseInt(din[1]))   // Se carga el calculo en el balance
        }
        else {
            per.innerText = parseInt(per.innerText) + 1     // Si perdio incremento cont Perdidos
            modo1.innerText += " - No gano "
        }
        if (cApostado == colorApo){ ganColor.innerText = parseInt(ganColor.innerText) + 1}   // incremento ganados a color
        if (pApostado == parNon){ganPar.innerText = parseInt(ganPar.innerText) + 1}          // incremento ganados a par/impar
        let suma = parseInt(dinA[1])+parseInt(dinP[1])              // se convierte valores a Int y se hace la suma
        dineroPer.innerText = '$ '+ suma                            // Se carga la suma en el cont de Dinero perdido
        jug.innerText = parseInt(jug.innerText) + 1                 // incremento el numero de jugadas
        dinero.innerText = '$ 0'                                    // Borro el dinero apostado
        SEL('RuletaFija').style.display = 'block'
        SEL('RuletaGirando').style.display = 'none'
    }, 8000)
})

function SEL (arg){
    return document.getElementById(arg)
}

function numeroAleatorio(){
    let dec
    let uni
    do{
        dec = Math. trunc(Math.random() * 10)   // Genera: 0 - 1 - 2 - 3
    }while (dec>3)
    dec *= 10                                   //Multiplica x 10 ya esta la decena
    if (dec == 30){                                 // Si el elegido es 3 = 30
        do{
            uni = Math.trunc(Math.random() * 10)   // solo genero numeros del 0 al 6
        }while (uni>6)
    }
    else{                                           // Si no fue 3
        uni = Math.trunc(Math.random() * 10)       // Genero un numero del 0 al 9
    }
    let suerte = dec + uni              // Sumo unidades y decenas, obteniendo el numero sorteado
    return suerte
}


function queColor (suerte){
    let colorApu = ''
    if(suerte != 0 ){
        if (suerte == 2 || suerte == 4 || suerte == 6 || suerte == 8 || suerte == 10 || suerte == 11 || suerte == 13 || suerte == 15 || suerte == 17 || suerte == 20 || suerte == 22 || suerte == 24 || suerte == 26 || suerte == 28 || suerte == 29 || suerte ==  31 || suerte == 33 || suerte == 35)
        { colorApu = 'Negro' }
        else { colorApu = 'Rojo' }
        if (suerte % 2 == 0) { parNon = 'Par' }
        else { parNon = 'Non' }
    }
    else { colorApu = 'Cero'; parNon = '' }
    return colorApu
}
