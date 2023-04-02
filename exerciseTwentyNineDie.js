// 29.- Simular cien tiradas de dos dados 
// y contar las veces que entre los dos suman 10. 

class Die{
    constructor(side){
        this.side = side;
    }

    throw(){
        return Math.floor(Math.random() * this.side) + 1;
    }
}

function countTen(){
    x = 0;
    count = 0;
    const dieOwo = new Die(6);
    const dieUwu = new Die(6);

    while(x < 100){
        let numDieOwo = dieOwo.throw();
        let numDieUwu = dieUwu.throw();
        if((numDieOwo + numDieUwu) == 10){
            count++;
        }
        x++;
    }
    return count;
}

function main(){
    let result = countTen();
    console.log(`The times the two dice added up to 10 was: ${result}`);
}

main();