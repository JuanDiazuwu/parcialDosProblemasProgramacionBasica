// 10.- Introducir un número por teclado y que nos diga si es par o impar. 

const prompt = require('prompt-sync')();

const isEven = (number) => {
    return number % 2 == 0;
};

const main = () =>{
    let inputUser = parseFloat(prompt('Type a number: '));
    if(isEven(inputUser)){
        console.log(`The number ${inputUser} is even`);
    } else{
        console.log(`The number ${inputUser} is odd`);
    }
};

main();