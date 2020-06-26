const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Por medio de true o false indica si la tarea ha finalizado',
    boolean: true
}

const argv = require('yargs')
    .command('listar', 'Muestra todas las tareas por hacer')
    .command('borrar', 'Borra una tarea por hacer', {
        descripcion
    })
    .command('crear', 'Crea una nueva tarea para hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}