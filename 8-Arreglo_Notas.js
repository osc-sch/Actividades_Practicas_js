const notas = [8, 6, 7, 9, 6]
let sumaNotas = 0;
let notafinal = 0;

console.log(`las notas son: ${notas}`)

for (let index = 0; index < notas.length; index++) {
    
    sumaNotas = sumaNotas + notas[index]

}

notafinal = sumaNotas / notas.length;

if (notafinal >= 6) {
    console.log(`El alumno esta Aprobado, la nota fianl es: ${notafinal}`);
} else {
    console.log(`El alumno esta Desaprobado, la nota fianl es: ${notafinal}`);
}