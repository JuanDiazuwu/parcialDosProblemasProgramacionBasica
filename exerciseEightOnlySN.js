const prompt = require('prompt-sync')();

const onlySN = () => {
    uwu = true;
    while(uwu == true){
        let inputUser = prompt('Write "S" or "N": ');
        if(inputUser == "S" || inputUser == "N"){
            continue;
        } else{
            console.log('YOu can only enter S or N, BYE!!!');
            break;
        }
    }
};

onlySN();