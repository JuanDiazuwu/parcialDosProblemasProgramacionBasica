// 39.- Crear una tabla de 3 paginas, 4 filas y 5 columnas 
// donde el primer elemento valga 1, el segundo 2, el tercero 3 y así sucesivamente. 

function getMatrix(){
    let count = 1;
    let matrix = [];
    for(let row = 0; row < 4; row++){
        matrix[row] = [];
        for(let col = 0; col < 5; col++){
            matrix[row][col] = count;
            count++;
        }
    }
    return matrix;
}

function main(){
    for(let i = 1; i <= 3; i++){
        console.log(`Table ${i}`);
        const mat = getMatrix();
        for(let row = 0; row < 4; row++){
            console.log(mat[row].join(' '));
        }
        console.log()
    }
}

main();