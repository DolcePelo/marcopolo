let fn = require('./modulito')
let underscore = require('underscore')
let grabarLocalStorage = require('./grabarLocalStorage')

{
    console.log('vamos a leer el local storage')
    console.log(localStorage.getItem('token'))
    underscore.delay(() => {
        fn()
        grabarLocalStorage()
    }, 2000)
}