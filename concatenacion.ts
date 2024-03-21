export const findLongestString = (variable: string[], R: number): string | undefined => {
    let longestString: string | undefined;

    for (let i = 0; i <= variable.length - R; i++) {
        const currentConcatenation = variable.slice(i, i + R).join("");

        if (!longestString || currentConcatenation.length > longestString.length) {
            longestString = currentConcatenation;
        }
    }

    return longestString;
};

// Utilizando un array variable de strings y un número entero R. Realizar una función que
// devuelva la primera cadena más larga que consta de R cadenas consecutivas tomadas en
// el array.
// Ejemplos:
// variable = ["abcd", "efghij", "klmnop", "qrst", "cuenta", "uvwxyz"], k = 2
// Concatenando las cadenas consecutivas de variable por 2, obtenemos:
// abcdefghij (longitud 10) concatenación de variable[0] y variable[1]
// efghijklmnop (" 12) concatenación de variable[1] y variable[2]
// klmnopqrst (" 10) concatenación de variable[2] y variable[3]
// qrstcuenta (" 10) concatenación de variable[3] y variable[4]
// cuentauvwxyz (" 12) concatenación de variable[4] y variable[5]
// Dos cadenas son las más largas: " efghijklmnop" y " cuentauvwxyz".
// El primero que se tiene es " efghijklmnop", así que el método debería devolver "
// efghijklmnop".
// Nota
// cadenas consecutivas: siguen una tras otra sin interrupción