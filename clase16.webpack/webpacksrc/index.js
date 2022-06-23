const fn = require('./modulito')
const underscore = require('underscore')

{
    alert('Este es el punto de entrada de webpack !!!!')
    underscore.delay(() => {
        fn()
    }, 2000)
}