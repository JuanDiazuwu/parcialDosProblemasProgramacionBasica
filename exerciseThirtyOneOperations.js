// 31.- Hacer un programa que nos permita introducir un número por teclado 
// y sobre él se realicen las siguientes operaciones: 
// comprobar si es primo, hallar su factorial o imprimir su tabla de multiplicar

const prompt = require('prompt-sync')();

const getNumber = () =>{
    let inputOwo = parseInt(prompt('Type a number: '));
    return inputOwo;
}

const isPrime = (n) => {
    let unit = 2;
    if(n < unit){
        return false;
    } else{
        for(let i = 2; i <= Math.sqrt(n); i++){
            if(n % i == 0){
                return false;
            }
        }
    }
    return true;
}

const factorial = (n) => {
    if(n < 2){
        return n;
    } else{
        return factorial(n - 1) * n;
    }
}

const multiplicationTable = (n) => {
    for(let i = 0; i <= 10; i++){
        console.log(`${n} x ${i} = ${i * n}`);
    }
}

function main(){
    let input = getNumber();
    console.log();

    if(!isPrime(input)){
        console.log(`The number ${input} is not a prime number`);
    } else{
        console.log(`The number ${input} is a prime number`);
    }

    console.log(`\nThe factorial of ${input} is: ${factorial(input)}`);

    console.log(`\nThe multiplication table of the number ${input} is:`);
    multiplicationTable(input);
}   

main();