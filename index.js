"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('readline');
const triangulo_1 = require("./triangulo");
const concatenacion_1 = require("./concatenacion");
const josephus_1 = require("./josephus");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const menu = () => {
    console.log('==== Menú ====');
    console.log('1. Triángulo');
    console.log('2. Cadena mas larga');
    console.log('3. Permutación de Josephus');
    console.log('0. Salir');
    console.log('==============');
    rl.question('Seleccione una opción: ', (option) => {
        switch (option) {
            case '1':
                // primer ejercicio
                console.log("-----------------------");
                console.log("primer ejercicio");
                const side1 = 3;
                const side2 = 4;
                const side3 = 0;
                console.log({
                    side1,
                    side2,
                    side3
                });
                console.log(`¿${side1}, ${side2}, ${side3} es un triángulo? ${(0, triangulo_1.isTriangle)(side1, side2, side3)}`);
                break;
            case '2':
                // segundo ejercicio
                console.log("-----------------------");
                console.log("-----------------------");
                console.log("-----------------------");
                console.log("Segundo ejercicio");
                const variable = ["Quiero", "formar", "parte", "de", "techywe", "Soluciones", "Tecnológicas"];
                const R = 2;
                console.log((0, concatenacion_1.findLongestString)(variable, R));
                break;
            case '3':
                // Tercer ejercicio
                console.log("-----------------------");
                console.log("-----------------------");
                console.log("-----------------------");
                console.log("Tercer ejercicio");
                const array = [1, 2, 3, 4, 5, 6, 7];
                const k = 3;
                (0, josephus_1.josephusPermutation)(array, k);
                break;
            case '0':
                rl.close();
                return;
            default:
                console.log('Opción no válida');
                break;
        }
        console.log('\n');
        menu();
    });
};
menu();
