let acumulador = 0;

for (let index = 1; index <= 100; index++) {
    console.log(`${acumulador} + ${index} = ${acumulador + index}`);
    acumulador = acumulador + index;
    
    
}

console.log(`El resultado final es: ${acumulador}`)