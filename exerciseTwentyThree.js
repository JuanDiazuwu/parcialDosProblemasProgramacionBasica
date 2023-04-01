//const prompt = require('prompt-sync')();
/*
const table = () =>{
    let input = parseInt(prompt('Type the number by row: '));
    for(let i = 1; i <= input; i++){
        for(let j = 1; j <= input; j++){
            console.log(j)
        }
    }
}
*/

const table = () => {
    for(let i = 1; i <= 100; i++){
        if(i % 10 == 0){
            console.log('\n');
        }
        process.stdout.write(`${i} `);
    }
}

table();