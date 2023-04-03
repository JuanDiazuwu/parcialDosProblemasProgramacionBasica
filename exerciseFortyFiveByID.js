const fs = require('fs');
const prompt = require('prompt-sync')();

function showID(){
    const fileData = fs.readFileSync('DATOS.DAT', 'utf8');
    const id = prompt('Type a id to search: ');
    const search = fileData.split('\n').filter(line => line.includes(id));

    if(search.length > 0){
        console.log(`This is the list of ${id}: `);
        search.forEach(line => console.log(line));
    } else {
        console.log(`There is not record to the id ${id}`);
    }
}

function main(){
    let choose;
    while(choose != 2){
        console.log()
        console.log('....MENU....');
        console.log('1. Search ID');
        console.log('2. Exit');
        console.log();
        choose = parseInt(prompt('Choose an option: '));

        switch(choose){
            case 1:
                showID();
                break;

            case 2:
                console.log('Bye!!!');

        }
    }
}

main();