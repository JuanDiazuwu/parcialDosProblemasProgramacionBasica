// 38.-Ordenar una matriz de M filas y N columnas por la primera columna  
// utilizando el método SHELL (por inserción). 

const getMatrix = (m, n) => {
    let matrix = [];
    for(let i = 0; i < m; i++){
        matrix.push([]);
        for(let j = 0; j < n; j++){
            matrix[i][j] = Math.floor(Math.random() * 10);
        }
    }
    return matrix;
}
/*
Tratando de entederlo :v source: https://gist.github.com/Tonylil/7a68dcdb6f2fd94285f1180bcb381994
function shellSort(arr) {
    const len = arr.length;
    for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < len; i++) {
            const temp = arr[i];
            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            arr[j] = temp;
        }
    }
    return arr;
} 
*/
function shellSort(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    for (let col = 0; col < cols; col++) {
        for (let gap = Math.floor(rows / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < rows; i++) {
                const temp = matrix[i][col];
                let j;
                for (j = i; j >= gap && matrix[j - gap][col] > temp; j -= gap) {
                    matrix[j][col] = matrix[j - gap][col];
                }
                matrix[j][col] = temp;
                }
            }
        }   
    return matrix;
}


function main(){
    const matrix = getMatrix(4, 4);
    console.log('Original Matrix: ')
    for(let i in matrix){
        console.log(matrix[i]);
    }
    console.log('\nSorted Matrix: ')
    const matrixSort = shellSort(matrix);
    for(let i in matrixSort){
        console.log(matrix[i]);
    }
}

main();