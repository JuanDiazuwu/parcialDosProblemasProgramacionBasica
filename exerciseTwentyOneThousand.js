// 21.- Hacer un programa que calcule independientemente la suma de los pares 
// y los impares de los números entre 1 y 1000. 

const isEven = (number) =>{
    return number % 2 == 0;
};

const isOdd = (number) => {
    return number % 2 != 0;
};

const getEvenNumbers = (a, b) =>{
    let countEven = 0;
    for(let i = a; i <= b; i++){
        if(isEven(i)){
            countEven += i;
        }
    }
    console.log(`Sum of even numbers is: ${countEven}`);
}

const getOddNumbers = (a, b) =>{
    let countOdd = 0;
    for(let i = a; i <= b; i++){
        if (isOdd(i)){
            countOdd += i;
        }
    }
    console.log(`Sum of odd numbers is: ${countOdd}`);
}

function main(){
    getEvenNumbers(1, 1000);
    getOddNumbers(1, 1000);
}

main();