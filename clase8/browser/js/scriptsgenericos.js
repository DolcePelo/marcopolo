function SEL(id) {
    return document.getElementById(id)
}

function atraparClickPorId(id, callBack) {
    document.getElementById(id).addEventListener('click', e => {
        e.preventDefault()
        callBack()
    })
}
