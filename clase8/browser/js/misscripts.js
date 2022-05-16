{
    asyncForLoop(10, (nroItem, next, abort) => {
        console.log("Nro Item: " + nroItem)
        setTimeout(()=> {
            next()
        }, 200)
    }, () => {
        console.log('finalizado')
    })
}