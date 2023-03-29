const isPair = (number) => {
    return number % 2 === 0;
};

const printPairNumbers = () => {
    for(let i = 0; i <= 100; i++){
        if(isPair(i)){
            console.log(i);
        }
    }
};

printPairNumbers();