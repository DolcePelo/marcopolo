function atraparClickPorId(id, callBack) {
    document.getElementById(id).addEventListener('click', e => {
        e.preventDefault()
        callBack()
    })
}
