/* Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario*/
let arreglo1: number[] = new Array(6);
let arreglo2: number[] = new Array(6);
let suma: number[] = new Array(6);
let indice: number;

for (indice = 0; indice < 6; indice++) {
  arreglo1[indice] = Number(
    prompt(
      "Ingrese un número para la posición " + indice + " del primer arreglo"
    )
  );
}
for (indice = 0; indice < 6; indice++) {
  arreglo2[indice] = Number(
    prompt(
      "Ingrese un número para la posición " + indice + " del segundo arreglo"
    )
  );
}
for (indice = 0; indice < 6; indice++) {
  suma[indice] = arreglo1[indice] + arreglo2[indice];
}
for (indice = 0; indice < 6; indice++) {
  console.log("La suma de la posición " + indice + " es " + suma[indice]);
}
