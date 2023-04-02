// 37.-Cargar las notas de los alumnos de un colegio en función del 
// número de cursos y del número de alumnos por curso. 

const getGrates = () => {
    let arrayGrates = [];
    for(let i = 0; i < 10; i++){
        let aux = Math.floor(Math.random() * 10) + 1;
        arrayGrates.push(aux);
    }
    return arrayGrates;
}

const getStudents = (numToStudents) => {
    let arrayStudents = [];
    for(let i = 0; i < numToStudents; i++){
        let grate = getGrates();
        arrayStudents.push(grate);
    }
    return arrayStudents;
}

const getCourses = (numToCourses) => {
    let arrayCourses = [];
    for(let i = 0; i < numToCourses; i++){
        let numberStudents = Math.floor(Math.random() * 100) + 1;
        students = getStudents(numberStudents);
        arrayCourses.push(students);
    }
    return arrayCourses;
}

function main() {
    let result = getCourses(6);
    for (let i = 0; i < result.length; i++) {
        console.log(`Course ${i + 1}`);
        console.log();
        for (let j = 0; j < result[i].length; j++) {
            console.log(`       Student ${j + 1}: ${result[i][j]}`);
        }
        console.log();
    }
}

main();