// 22.- Introducir una frase por teclado. Imprimirla cinco veces en filas consecutivas, 
// pero cada impresión ir desplazada cuatro columnas hacia la derecha. 

const prompt = require('prompt-sync')();

const getString = () =>{
    let inputUser = prompt('Type a phrase: ')
    return inputUser;
}

function main(){
    let input = getString();
    for(let i = 0; i < 5; i++){
        let white = i * 4;
        let space = " ".repeat(white);
        console.log(space + input);
    }
}

main();