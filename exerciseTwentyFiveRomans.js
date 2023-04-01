const prompt = require('prompt-sync')();

const isLess = (num) => {
    if(num <= 5000){
        return true;
    } else { return false; }
}

const convertToRoman = (convertNumber) => {
    const romansNomenclature = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let result = '';
    for(let i in romansNomenclature){
        result += i.repeat(Math.floor(convertNumber / romansNomenclature[i]));
        convertNumber = convertNumber % romansNomenclature[i];
    }
    return result;
}

function mainUwu(){
    let numberUser = parseInt(prompt('Type a number to convert to roman numeral: '));
    if(isLess(numberUser)){
        let result = convertToRoman(numberUser);
        console.log(`The result is: ${result}`)
    } else{
        console.log('The numbers is greater than 5000');
    }
}

mainUwu();