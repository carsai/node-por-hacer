const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors');
const { boolean } = require('yargs');

let comando = argv._[0];
let resultado = false;

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea)
        break;
    case 'listar':
        let tareas = porHacer.listado();
        for (let tarea of tareas) {
            console.log('===============Por Hacer================'.blue);
            console.log(tarea.descripcion);
            console.log(`Estado: ${(tarea.completado) ? colors.green('Completado') : colors.red('No Completado')}`);
            console.log('========================================'.blue);
        }
        break;
    case 'actualizar':
        resultado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(resultado);
        break;
    case 'borrar':
        resultado = porHacer.borrar(argv.descripcion);
        console.log(resultado);
        break;
    default:
        console.log('Comando no valido');
        break;
}