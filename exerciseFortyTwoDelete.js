const fs = require('fs');
const prompt = require('prompt-sync')();

function getID(){
    let idToSearch = prompt('Type the ID: ');
    return idToSearch;
}

function searchID(fileName, searchWord){
    const fileData = fs.readFileSync(fileName, 'utf8');
    const lines = fileData.split('\n');

    for (let i = 0; i < lines.length; i++){
        const line = lines[i];
        if (line.includes(searchWord)){
            console.log(`Found "${searchWord}" in record/line ${i + 1}:\n${line}`);
            lines.splice(i, 1);
            console.log('Line deleted success');
        }
        const newData = lines.join('\n');
        fs.writeFileSync(fileName, newData);
    }
}

searchID('DATOS.DAT', getID());

/*const fs = require('fs');
const prompt = require('prompt-sync')();

function getID(){
    let idToSearch = prompt('Type the ID: ');
    return idToSearch;
}

function searchID(id){
    fs.readFile('./DATOS.DAT', function (err, data){
        if(err) throw err;
        if(data.includes(id)){
            console.log('awuita de uwu');
            return true;
        } else {
            console.log('no awuita de uwu :(');
            return false;
        }
    });
}

function deleteLine(){
    if(searchID(getID())){

    }
}
*/