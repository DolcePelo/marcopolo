let log4js = require('log4js')

let configuracionLogger = {
    appenders : {
        archivo: {
            type: 'file',
            filename: '/var/marcopolo/logs/log.log'
        },
        consola: {
            type: 'stdout'
        }
    },
    categories: {
        default: {
            appenders: ['archivo', 'consola'],
            level: 'debug'
        }
    }
}

log4js.configure(configuracionLogger)

module.exports = z => log4js.getLogger(z)
