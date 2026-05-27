const esrudiante = {
    nombre: 'Jose',
    apellido: 'Fernades',
    nota: 5
}

console.log(`nombre: ${esrudiante.nombre}`);
console.log(`apellido: ${esrudiante.apellido}`);
if (esrudiante.nota >= 6) {
    console.log('Esta aprobado.')
} else {
    console.log('Esta desaprobado.')
}