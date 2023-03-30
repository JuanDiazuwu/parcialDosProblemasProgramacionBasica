// 11.- Imprimir y contar los múltiplos de 3 desde el uno hasta un número que introducimos por teclado. 

const prompt = require('prompt-sync')();

function multiples (x, y, z){ // x = 3(number multiples), y = start(1), z = end(inputUser)
    const listUwu = [];
    for(let i = y; i <= z; i++){
        if(i % x == 0){
            listUwu.push(i);
        }
    }
    return listUwu;
};

function main(){
    let inputUser = parseInt(prompt('Type a number: '));
    let countToMultiples = 0;
    
    if(inputUser < 3){
        return 'Error'
    }    
    let listOwo = multiples(3, 1, inputUser);

    for(multiple in listOwo){
        countToMultiples++;
    }

    console.log(`Multiples: ${listOwo}`);
    console.log(`Count to multiples: ${countToMultiples}`);
}

main();