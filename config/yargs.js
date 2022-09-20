const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muesta la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Este es el numero hasta donde queres que valla la tabla'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'la base tiene que ser un numero'
        }
        return true;
    })
    .argv

module.exports = argv

























// DOCUMENTACION ANTIGUA
// const [, , arg3 = 'base=5'] = process.argv
// el SPLIT nos separa la cadena por el caracter pasado por parametro
// const [, base = 5] = arg3.split("=")