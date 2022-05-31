{
    let pb = document.getElementById('barraProgreso')

    // IIFE Inmediatly Invoked Function Expression
    ;(function funcionRecurrente(contador) {
        pb.value = contador
        if (contador >= 100) {
            return
        }
        setTimeout(() => {
            // Llamar a otra funcion que haga que titile algo.
            funcionRecurrente(contador + 1)
        }, 500)
    })

    /*
    Este ejercicio, es una forma de progress bar pero jugando
    con la hora.
    en la practica, vamos a hacer, tomar el Date.now() este nos
    va a dar la hora en milisegundos, lo vamos a dividir por 100
    y lo vamos truncar.
    Luego vamos a sumar, 60 segundos.
    Luego probamos, pero una vez probado, hay que extrapolar esos
    60 segundos a otra base que va de 0 a 99.
    */

    let horaActual = () => Math.floor(Date.now() / 100)
    let horaFinal = horaActual() + 1200;

    (function autoinvocable() {
        let avance = horaFinal - horaActual()
        avance = Math.floor(avance / 10)

        console.log(avance)
        pb.value = avance
        if (avance > 0) {
            setTimeout(autoinvocable, 250)
        }
    })()

}
