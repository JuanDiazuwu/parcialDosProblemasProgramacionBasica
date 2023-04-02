// 32.- Crear un arreglo de 20 elementos con nombres de personas. 
// Mostrar los elementos de la lista debiendo ir cada uno en una fila distinta. 

const array = ['Daniel', 'Olivia', 'David', 'Alex', 'Gabriel', 'Sofia', 'Victoria',
 'Samuel', 'Lucas', 'Luis', 'Alexa', 'Angel', 'Camila', 'Adrian', 'Javier', 'Andrea',
 'Juan', 'Adriana', 'Maria', 'Diego'];
/*
function printUwu(array){
    console.log(array.join('  '));
}
*/

function printUwu(array){
    for(let i of array){
        console.log(i);
    }
}

printUwu(array);