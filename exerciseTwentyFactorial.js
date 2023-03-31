// 20.- Calcular el factorial de un número, mediante funciones. 

function factorial(n){
    if(n < 2){
        return n;
    } else{
        return factorial(n - 1) * n;
    }
}

function main(){
    let n = 7;
    let result = factorial(n);
    console.log(`The factorial to ${n} is: ${result}`);
}

main();