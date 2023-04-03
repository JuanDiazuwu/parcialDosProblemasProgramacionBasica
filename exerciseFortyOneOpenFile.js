const fs = require('fs');
const prompt = require('prompt-sync')();

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

openFile(); 