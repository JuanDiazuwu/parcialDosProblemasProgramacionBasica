const prompt = require('prompt-sync')();

const getPhrase = () => {
    let inputUser = prompt('Type a phrase: ');
    return inputUser;
}

function printCenter(phrase){
    const line = process.stdout.columns;
    const spaces = Math.floor((line - phrase.length) / 2);
    const padding = ' '.repeat(spaces);
    console.log(padding + phrase);
}

function main(){
    printCenter(getPhrase());
}

main();