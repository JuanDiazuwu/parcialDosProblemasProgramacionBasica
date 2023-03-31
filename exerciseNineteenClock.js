// 19.- Hacer un programa que simule el funcionamiento de un reloj digital 
// y que permita ponerlo en hora. 

function clockUwu(){
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    console.log(hour + ':' + minutes + ':' + seconds);
}

function main(){
    setInterval(clockUwu, 1000);
}

main();