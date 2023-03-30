// 12.- Hacer un programa que imprima los números del 1 al 100 y que 
// calcule la suma de todos los
// números pares por un lado, y por otro, la de todos los impares. 

const isEven = (number) => {
    return number % 2 == 0;
};

const printNumbers = () =>{
    let countEven = 0;
    let countOdd = 0;
    for(let i = 1; i < 101; i++){
        console.log(i);
        if(isEven(i)){
            countEven++;
        } else {countOdd++;}
    }
    return [`The count of even numbers is: ${countEven}`, `The count of odd numbers is: ${countOdd}`];
    //console.log(countEven);
    //console.log(countOdd);
};

function main(){
    let uwu = printNumbers();
    console.log(uwu)
};

main();