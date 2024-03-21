const readline = require('readline');
import { isTriangle } from './triangulo';
import { findLongestString } from './concatenacion';
import { josephusPermutation } from './josephus';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const menu = (): void => {
    console.log('==== Menú ====');
    console.log('1. Triángulo');
    console.log('2. Cadena mas larga');
    console.log('3. Permutación de Josephus');
    console.log('0. Salir');
    console.log('==============');
  
    rl.question('Seleccione una opción: ', (option: string) => {
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
                })
                console.log(`¿${side1}, ${side2}, ${side3} es un triángulo? ${isTriangle(side1, side2, side3)}`);
                break;
            case '2':
                // segundo ejercicio
                console.log("-----------------------");
                console.log("-----------------------");
                console.log("-----------------------");
                console.log("Segundo ejercicio");

                const variable = ["Quiero", "formar", "parte", "de", "techywe", "Soluciones", "Tecnológicas"];
                const R = 2;
                console.log(findLongestString(variable, R));
                break;
            case '3':
                // Tercer ejercicio
                console.log("-----------------------");
                console.log("-----------------------");
                console.log("-----------------------");
                console.log("Tercer ejercicio");

                const array = [1, 2, 3, 4, 5, 6, 7];
                const k = 3;
                josephusPermutation(array, k);
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
