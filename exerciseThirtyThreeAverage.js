// 33.- Hacer un programa que lea las calificaciones de un alumno en 10 asignaturas, 
// las almaceneen y calcule e imprima su media. 

const prompt = require('prompt-sync')();

const getCalf = () => {
    const array = [];
    for(let i = 1; i <= 10; i++){
        let calf = parseFloat(prompt(`Type the number ${i} qualification: `));
        array.push(calf);
    }
    return array;
}

const average = (array) => {
    let sum = 0;
    let count = 0;
    for(let i of array){
        sum += i;
        count++;
    }
    let result = sum / count;
    return result;
}

console.log(`The average of qualification is: ${average(getCalf())}`);