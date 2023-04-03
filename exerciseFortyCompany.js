// 40.- Una empresa guarda las ventas realizadas por sus tres representantes a lo 
// largo de doce meses de sus cuatro productos, VENTAS( representante, mes, producto ). 
// Queremos proyectar el total de ventas, TOTAL ( mes, producto ), 
// para lo cual sumamos las ventas de cada producto de
// cada mes de todos los representantes. Imprimir toda la información. 

function sales(){
    let data = [];
    for (let i = 0; i < 3; i++) { // Vendedores
        data.push([]);
        for (let j = 0; j < 12; j++) { // Meses
            data[i].push([]);
            for (let k = 0; k < 4; k++) { // Producto
                data[i][j].push(Math.floor(Math.random() * 4) + 1); 
            }
        }
    }
    return data;
}

function totalSales(){
    let salesData = sales();
    console.log('Data:')
    console.log(salesData);
    const total = [];
    for(let i = 0; i < salesData[0].length; i++){
        total.push([]);
        for(let j = 0; j < salesData[0][0].length; j++){
            let aux = 0;
            for(let k = 0; k < salesData.length; k++){
                aux += salesData[k][i][j];
            }
            total[i][j] = aux;
        }
    }
    return total;
}

function main(){
    let array = totalSales();
    console.log();
    console.log('Total Sales:');
    console.log(array);
}

main();