


function findPower(base, exponent){

    if(exponent === 0){
        return 1;
    }

    // If number is even 
    if(exponent % 2 === 0){
        const halfPower = findPower(base, exponent / 2);
        return halfPower * halfPower;
    } else {
        // If number is odd
        const halfPower = findPower(base, (exponent - 1) / 2);
        return base * halfPower * halfPower;
    }

}

console.time('Find Power 1');
findPower(3, 100);
console.timeEnd('Find Power 1');

console.time('Find Power 2');
findPower(3, 100000);
console.timeEnd('Find Power 2');

console.time('Find Power 3');
findPower(3, 10000000);
console.timeEnd('Find Power 3');