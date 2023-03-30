// 13.- Imprimir y contar los números que son múltiplos de 2 o de 3 que hay entre 1 y 100. 

function main(){
    let multiplesOfTwo = 0;
    let multiplesOfThree = 0;
    for(let i = 1; i <= 100; i++){
        console.log(i)
        if(i % 2 == 0){
            multiplesOfTwo++;
        } else if(i % 3){
            multiplesOfThree++;
        }
    }
    console.log(`Count numbers that are multiples of two is: ${multiplesOfTwo}`);
    console.log(`Count numbers that are multiples of two is: ${multiplesOfThree}`);
}

main();