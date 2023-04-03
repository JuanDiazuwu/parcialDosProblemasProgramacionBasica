const fs = require('fs');
const prompt = require('prompt-sync')();

function getID(){
    let idToSearch = prompt('Type the ID: ');
    return idToSearch;
}

function getInfo(){
    let id = prompt('Type an ID: ');
    let name = prompt('Type a name: ');
    let lastName = prompt('Type a last name: ');
    let address = prompt('Type an address: ');
    let state = prompt('Type an state: ');

    let info = `ID: '${id}', NAME: '${name}', LAST NAME: '${lastName}', ADDRESS: '${address}', STATE: '${state}'\n`;
    return info;
}

function openFile(){
    const info = getInfo();
    const filePath = './DATOS.DAT';
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '');
        console.log(`File created`);
    }
    fs.appendFileSync('./DATOS.DAT', info);
    console.log('Added success!!!');
}

function changeRecord(fileName, searchWord){
    const fileData = fs.readFileSync(fileName, 'utf8');
    const lines = fileData.split('\n');

    for (let i = 0; i < lines.length; i++){
        const line = lines[i];
        if (line.includes(searchWord)){
            console.log(`Found "${searchWord}" in record/line ${i + 1}:\n${line}`);
            lines[i] = getInfo();
            fs.writeFileSync(fileName, lines.join('\n'), 'utf8');
        }
    }
}

function main(){
    let choose;
    while(choose != 3){
        console.log()
        console.log('....MENU....');
        console.log('1. Add info')
        console.log('2. Edit');
        console.log('3. Exit');
        console.log()
        choose = parseInt(prompt('Choose an option: '));

        switch(choose){
            case 1:
                openFile();
                break;

            case 2:
                changeRecord('DATOS.DAT', getID());
                break;

            case 3:
                console.log('Bye!!!');
        }
    }
}

main();