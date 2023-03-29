const isOdd = (number) => {
    return number % 2 != 0;
};

const printPairNumbers = () => {
    countToOdd = 0;
    for(let i = 0; i <= 100; i++){
        if(isOdd(i)){
            console.log(i);
            countToOdd++;
        }
    }
    console.log(`The total number of odd numbers is: ${countToOdd}`)
};

printPairNumbers();