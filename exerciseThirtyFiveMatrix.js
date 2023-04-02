// 35.- Generar una matriz de 4 filas y 5 columnas 
// con números aleatorios entre 1 y 100, e imprimirla. 

const doMatrix = () => {
    let array = [];
    for(let i = 0; i < 4; i++){
        array.push([])
        for(let j = 0; j < 5; j++){
            array[i].push(getAleatoryNumber());
        }
    }
    return array;
}

const getAleatoryNumber = () => {
    let aux = Math.floor(Math.random() * 100) + 1;
    return aux;
}

console.log(doMatrix())