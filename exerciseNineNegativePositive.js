const prompt = require('prompt-sync')();

function positiveOrNegative(){
    let inputUser = parseFloat(prompt('Type a number: '));
    if(inputUser > 0){
        console.log(`The number ${inputUser} is positive`);
    } else if(inputUser < 0){
        console.log(`The number ${inputUser} is negative`);
    } else if(inputUser == 0){
        console.log('The number is zero');
    } else{
        console.log('It is not a number')
    }
};

positiveOrNegative();