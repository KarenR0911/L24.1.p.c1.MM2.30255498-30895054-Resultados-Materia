/*Sea la información de varios Estudiante: cédula y nota final. Se sabe que los Estudiante 
aprueban con 48Ptos. 
Se desea procesar a varios Estudiante y determinar la siguiente estadística: porcentaje de 
aprobados y cédula de alguno de los mejores Estudiante. 
Siendo los resultados de un salón de clases los siguientes: cédula(puntos); 888 (60Ptos), 
777 (50Ptos), 999 (40Ptos), 333 (90Ptos), 111 (30Ptos), 666 (90Ptos), 444 (48Ptos) y 
222 (60Ptos) */

import Estudiante from "./Estudiante.js";
import Salon from "./Salon.js";

let est1 = new Estudiante("888", 60);
let est2 = new Estudiante("777", 50);
let est3 = new Estudiante("999", 40);
let est4 = new Estudiante("333", 90);
let est5 = new Estudiante("111", 30);
let est6 = new Estudiante("666", 90);
let est7 = new Estudiante("444", 48);
let est8 = new Estudiante("222", 60);

let salon = new Salon();

salon.procesarEstudiante(est1);
salon.procesarEstudiante(est2);
salon.procesarEstudiante(est3);
salon.procesarEstudiante(est4);
salon.procesarEstudiante(est5);
salon.procesarEstudiante(est6);
salon.procesarEstudiante(est7);
salon.procesarEstudiante(est8);

let salida = document.getElementById("Salida");
salida.innerHTML = `A continuación se mostrarán los resultados: <br>`;
salida.innerHTML += `Porcentaje de aprobados: ${salon.calcPorcentaje()}%`;
salida.innerHTML += `<br>Cédula de alguno de los mejores Estudiante: ${salon.devolverMejorEstudiante()}`;
