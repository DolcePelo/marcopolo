document.addEventListener('click', e => {
    discriminarPorObjeto(e.target.id)
})

function discriminarPorObjeto(idDelTarget) {
    switch (idDelTarget) {
        case 'tres':
            console.log('TRES: ' + new Date().getMilliseconds())
            break
        case 'dos':
            console.log('DOS: ' + new Date().getMilliseconds())
            break
        case 'uno':
            console.log('UNO: ' + new Date().getMilliseconds())
            break
        default:
            console.log('Hace el click pero no calza en ninguno' + new Date().getMilliseconds())
            break
    }
}
