export const josephusPermutation = (matriz: number[], k: number): number[] => {
    const permutation: number[] = [];
    let currentIndex = 0;

    while (matriz.length > 0) {
        currentIndex = (currentIndex + k - 1) % matriz.length;
        console.log(`Eliminando elemento: ${matriz[currentIndex]}`);
        permutation.push(matriz[currentIndex]);
        matriz.splice(currentIndex, 1);
    }

    console.log("Permutación final:");
    console.log(permutation);

    return permutation;
};


// Se debe crear una función en Typescript que devuelva una permutación de Josephus,
// tomando como parámetros un array inicial de elementos a permutar como si estuvieran
// en un círculo y contar cada k lugares hasta que no quede ninguno.
// Consejos y notas: ayuda empezar a contar desde 1 hasta n, en lugar del rango habitual
// de 0 a n-1; k siempre será >=1.
// Por ejemplo, con una matriz=[1,2,3,4,5,6,7] y k=3, la función debería actuar de esta
// manera.
// n=7, e=3 => se tienen 7 elementos y se elimina el tercero en la posición cada vez hasta
// que queda 1.
// [1,2,3,4,5,6,7] – secuencia inicial
// [1,2,4,5,6,7] => el 3 se elimina
// [1,2,4,5,7] => el 6 se elimina
// [1,4,5,7] => el 2 se elimina, etc