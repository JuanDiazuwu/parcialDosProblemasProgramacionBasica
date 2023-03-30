const isEven = (number) => {
    return number % 2 == 0;
};

const multiplesTwo = (x, y) =>{
    count = 0;
    for(let i = x; i <= y; i++){
        console.log(i);
        if(isEven(i)){
            count++;
        }
    }
    return count;
}

function main(){
    let a = 15;
    let b = 2;
    let min = Math.min(a, b);
    let max = Math.max(a, b);

    let result = multiplesTwo(min, max)

    console.log(`The count of even number between ${min} and ${max} is: ${result}`);
}

main();