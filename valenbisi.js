const rl = require('readline-sync');

'use strict'

const fs = require ('fs');
const path = require ("path");

let rawdata = fs.readFileSync(path.resolve(__dirname, "./valenbisiData.JSON"));
let estaciones = JSON.parse(rawdata);
let numEstaciones = 0;

//console.log(estaciones);
//console.log(estaciones.features[0]);

for(let i = 0; i < estaciones.features.length; i++){
    if (estaciones.features[i].properties.total >= 20){
        console.log("El nombre de la estacion es: " + estaciones.features[i].properties.name);
        console.log("La direccion de la estacion es: "+ estaciones.features[i].properties.address);
        console.log("Las coordenadas latitud de la estacion son: " + estaciones.features[i].geometry.coordinates[0]);
        console.log("Las coordenadas altitud de la estacion son: " + estaciones.features[i].geometry.coordinates[1]);
        numEstaciones++;
    }
}

console.log("Estaciones con 20 bornes o mas: " + numEstaciones);