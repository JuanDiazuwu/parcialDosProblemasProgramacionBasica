const prompt = require('prompt-sync')();

function getPhrases(){
    let count = 0;
    while (true){
        let aux = prompt("Type a phrase: ");
        if(aux == 69){
            console.log(`Total of phrases was: ${count}`);
            break;
        }
        count++;
        console.log(`Count of phrases: ${count}\n`);
    }
};

getPhrases();