/*
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('Type a number: ', (num) => {
    for(let i = 1; i <= num; i++){
        console.log(i);
    }
    readline.close();
}); */

const prompt = require('prompt-sync')();

const input = prompt('Type a number: ');

const naturalNumbers = (num) => {
    for(let i = 1; i <= num; i++){
        console.log(i);
    }
}

naturalNumbers(input);