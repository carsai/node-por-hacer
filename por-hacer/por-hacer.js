const fs = require('fs');
const { boolean } = require('yargs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, (error) => {
        if (error) throw error;
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    };

    cargarDB();

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const listado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let tarea = listadoPorHacer.find(tarea => tarea.descripcion === descripcion);
    if (tarea) {
        tarea.completado = completado;
        guardarDB();
        return true;
    }
    return false;

}

const borrar = descripcion => {
    cargarDB();
    let nuevoListadoPorHacer = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (nuevoListadoPorHacer.length !== listadoPorHacer.length) {
        listadoPorHacer = nuevoListadoPorHacer;
        guardarDB();
        return true;
    }
    return false;
}

module.exports = {
    crear,
    listado,
    actualizar,
    borrar
}