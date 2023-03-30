// 14.- Hacer un programa que imprima el mayor y el menor de una serie de cinco números 
// que vamos introduciendo por teclado

const prompt = require('prompt-sync')();

const maxAndMin = () =>{
    count = 0;
    listUwu = [];
    while(count < 5){
        let aux = parseInt(prompt(`Type the number ${count + 1}: `));
        count++;
        listUwu.push(aux);
    }
    console.log(`The max number is: ${Math.max(...listUwu)}`);
    console.log(`The min number is: ${Math.min(...listUwu)}`);
};

function main(){
    maxAndMin();
};

main();