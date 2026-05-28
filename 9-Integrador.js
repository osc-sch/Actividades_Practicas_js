const nombreAlumno = 'Jose Perez';
let notas = [6, 6, 2, 4, 2, 8]
let sumaNotas = 0;
let notaTotal;
let estado = ''

for (let index = 0; index < notas.length; index++) {
    sumaNotas = sumaNotas + notas[index];
}

notaTotal = sumaNotas / notas.length
notaTotal = notaTotal.toFixed(0);

if (notaTotal == 6) {
    estado = 'Aprobado';
} else if (notaTotal >= 7) {
    estado = 'Muy Bueno';
} else {
    estado = 'Desaprobado';
}

console.log(`El Alumno ${nombreAlumno} su promedio es: ${notaTotal}, ${estado}`);