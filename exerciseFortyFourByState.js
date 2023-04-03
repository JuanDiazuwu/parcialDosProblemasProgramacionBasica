const fs = require('fs');
const prompt = require('prompt-sync')();

function main(){
    const fileData = fs.readFileSync('DATOS.DAT', 'utf8');
    const state = prompt('Type a state to search: ');
    const search = fileData.split('\n').filter(line => line.includes(state));

    if(search.length > 0){
        console.log(`This is the list of ${state}: `);
        search.forEach(line => console.log(line));
    } else {
        console.log(`There is not record to the state ${state}`);
    }
}

main();