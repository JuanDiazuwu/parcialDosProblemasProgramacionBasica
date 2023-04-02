// 36.- Generar una matriz de 4 filas y 5 columnas con números aleatorios 
// entre 1 y 100, y hacer su matriz transpuesta. 

const doMatrix = () => {
    const array = [];
    for(let i = 0; i < 4; i++){
        array.push([])
        for(let j = 0; j < 5; j++){
            array[i].push(getAleatoryNumber());
        }
    }
    return array;
}

const doTransposedMatrix = (array) => {
    const transposedMatrix = [];
    for(let i = 0; i < 5; i++){
        let aux = [];
        for(let j = 0; j < 4; j++){
            aux.push(array[j][i]);
        }
        transposedMatrix.push(aux);
    }
    return transposedMatrix;
}

const getAleatoryNumber = () => {
    let aux = Math.floor(Math.random() * 100) + 1;
    return aux;
}


let matrix = doMatrix();
console.log(matrix);
console.log(doTransposedMatrix(matrix));