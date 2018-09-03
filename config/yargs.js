const opts = {

    completado: {
        default: true,

        alias: 'c',
        desc: 'marca como completado'

    },
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'descrip de la tarea'
    }
}
const o = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'descrip de la tarea'
    }

}
const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', o)
    .command('listar', 'listar cosas por hacer')
    .command('actualizar', 'actualia estados por hacer', opts)
    .command('borrar', 'borra una tarrerra', o)
    .help()
    .argv;


module.exports = {
    argv
}