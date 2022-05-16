let logger = require('./lib/logger')('primeroLoSincronico')
let _ = require('underscore')

logger.info("Paso 1");
_.delay(() => {
    logger.info("paso 3");
}, 0)
logger.info("Paso 2");
for (let x=0; x < 10000; x++) {
    logger.info(x);
}
for (;;) {}

/*
Como se que los pasos se van a ejecutar en el orden de
1, 2, 3
Hasta que no haya nada por hacer sincronico ?
no se ejecuta lo asincronico
*/

