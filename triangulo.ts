export const isTriangle = (side1: number, side2: number, side3: number): boolean => {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
        return false;
    }
    return side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2
};



// Desarrollar un método en NODE JS que acepte 3 valores entero. La función debería
// devolver verdadero si se puede construir un triángulo con los lados de la longitud dada y
// falso en cualquier otro caso.
// (En este caso, todos los triángulos deben tener una superficie mayor que 0 para ser
// aceptados)