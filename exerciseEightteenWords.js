// 18.- Hacer un programa que cuente las veces que aparece una determinada letra en 
// una frase que introduciremos por teclado. 

const prompt = require('prompt-sync')();

const getLetter = () =>{
    let letter = prompt('Type a letter: ');
    return letter;
}

const getPhrase = () =>{
    let phrase = prompt('Type a phrase: ');
    return phrase;
}

function main(){
    let letterUser = getLetter();
    let letterPhrase = getPhrase();
    let count = 0;

    for(let i of letterPhrase){
        if(i == letterUser){
            count++;
        }
    }
    console.log(`The number of times that letter '${letterUser}' is repeated is: ${count}`);    
}

main();