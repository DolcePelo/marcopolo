const express = require('express')
const genUsuario = require('./lib/genusuario')
const {RecursoAgregado, BadRequestError, NotFound, InternalServerError} = require('./lib/codigosHTTP')
const _ = require('underscore')

const app = express()

app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));
app.use(express.json());

let arrUsuarios = []

app.get('/api/obtenerusuarios', (request, response) => {
    let arr = []
    _.times(100, () => {
      arr.push(genUsuario())
    })
    _.delay(() => {
      response.status(200).send(JSON.stringify(arr))
    }, 20)
    arrUsuarios.push(...arr)
})

app.get('/api/usuario/:id', (request, response) => {
    let id = request.params.id
    let result = _.filter(arrUsuarios, z => z.id === id)

    if (result.length === 0) {
        response.status(404).send(JSON.stringify({status:'NOT FOUND'}))
    }
    else {
        response.status(200).send(JSON.stringify(result[0]))
    }
})

app.listen(3000, err => {
    console.log('escuchando el puerto 3000')
})