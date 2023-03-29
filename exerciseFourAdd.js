const addTo100 = () => {
    let count = 0;
    for(let i = 0; i <= 100; i++){
        count += i;
    }
    return count;
};

console.log(`The sum of the first 100 numbers is: ${addTo100()}`)