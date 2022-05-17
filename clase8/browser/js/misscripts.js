function primero() {
    asyncForLoop(10, (nroItem, proximo, abort) => {
        console.log("Nro Item: " + nroItem)
        setTimeout(()=> {
            proximo()
        }, 200)
    }, () => {
        console.log('finalizado, pero sigue en segundo')
        segundo()
    })
}

function segundo() {
    asyncForLoop(10, (nroItem, proximo, abort) => {
        console.log("Nro Item de la segunda funcion: " + nroItem)
        setTimeout(()=> {
            proximo()
        }, 200)
    }, () => {
        console.log('finalizado')
    })
}

primero();