// 30.- Introducir dos números por teclado y mediante un menú, 
//calcule su suma, su resta, su multiplicación o su división. 

const prompt = require('prompt-sync')();

const getNumbers = () =>{
    let inputOwo = parseInt(prompt('Type a number: '));
    return inputOwo;
}

function menu(){
    let choose;
    const inputOne = getNumbers();
    const inputTwo = getNumbers();

    while(choose != 5){
        console.log()
        console.log('....MENU....');
        console.log('1. Add +');
        console.log('2. Substract -');
        console.log('3. Multiply *');
        console.log('4. Split / ');
        console.log('5. Exit');
        console.log()
        choose = parseInt(prompt('Choose an option: '));

        switch(choose){
            case 1:
                console.log(`The add of ${inputOne} + ${inputTwo} is: ${inputOne + inputTwo}`);
                break;

            case 2:
                console.log(`The subtraction of ${inputOne} - ${inputTwo} is: ${inputOne - inputTwo}`);
                break;

            case 3:
                console.log(`The multiplication of ${inputOne} x ${inputTwo} is: ${inputOne * inputTwo}`);
                break;

            case 4:
                console.log(`The division of ${inputOne} / ${inputTwo} is: ${inputOne / inputTwo}`);
                break;

            case 5:
                console.log('Bye!!!');
                break;
        }

    }
}

menu();