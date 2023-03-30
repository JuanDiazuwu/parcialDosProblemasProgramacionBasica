// 15.- Introducir dos números por teclado. Imprimir los números naturales que hay 
// entre ambos números empezando por el más pequeño, contar cuántos hay y cuántos de 
// ellos son pares. Calcular la suma de los impares. 

const prompt = require('prompt-sync')();

const printBetween = () => {
    let a = parseInt(prompt('Type a number: '));
    let b = parseInt(prompt('Type other number: '));
    let min = Math.min(a, b);
    let max = Math.max(a, b);

    let countBetween = 0;
    let countEven = 0;
    let sumOdd = 0;

    for(let i = min; i <= max; i++){
        console.log(i)
        countBetween++;
        if(i % 2 == 0){
            countEven++;
        } else{
            sumOdd += i;
        }
    }

    console.log(`The sum of the numbers between ${a} and ${b} is: ${countBetween}`);
    console.log(`The count of even number is: ${countEven}`);
    console.log(`The sum of odd numbers is: ${sumOdd}`);

};

printBetween();