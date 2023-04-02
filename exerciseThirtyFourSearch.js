// 34.- Usando el segundo ejemplo, hacer un programa que busque una nota en la lista. 

const prompt = require('prompt-sync')();

const getArray = () => {
    array = [];
    for(let i = 0; i < 10; i++){
        let aux = Math.floor(Math.random() * 10) + 1;
        array.push(aux);
    }
    return array;
}

function search(){
    const array = getArray();
    console.log(array);
    let numberToSearch = parseFloat(prompt('Type a number to search: '));
    for(let i of array){
        if(numberToSearch == i){
            console.log(`The number ${numberToSearch} is on the array`);
            return true;
        }
    }
    console.log(`The number ${numberToSearch} is not on the array`);
    return false;
}

search();