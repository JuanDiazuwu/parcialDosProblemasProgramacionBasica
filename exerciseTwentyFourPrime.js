const prompt = require('prompt-sync')();

const isPrimeNumber = () => {
    let input = parseInt(prompt('Type a number to see if it is a number prime: '));
    let unit = 2;
    if(input < unit){
        return false;
    } else{
        for(let i = 2; i <= Math.sqrt(input); i++){
            if(input % i == 0){
                return false;
            }
        }
    }
    return true;
}
// console.log(`The number ${input} is a prime number`);
function main(){
    if(isPrimeNumber()){
        console.log('The number is a prime number');
    } else {
        console.log('The number is not a prime number')
    }
}

main()