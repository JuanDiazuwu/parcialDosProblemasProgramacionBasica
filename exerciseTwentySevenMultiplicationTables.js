const prompt = require('prompt-sync')();

const getNumber = () =>{
    let inputNumber = parseInt(prompt('Type a number between 0 and 10: '));
    return inputNumber;
}

function multiplicationTable(n){
    for(let i = 0; i <= 10; i++){
        console.log(`${n} x ${i} = ${i * n}`);
    }
}

function main(){
    let num = getNumber();
    if(isNaN(num)){
        console.log('The input is not a number');
    } else if(num < 0 || num > 10){
        console.log('The number has to be between 0 and 10');
    } else{
        multiplicationTable(num)
    }
}

main();