


function sumArray(array){
    let sum = 0;
    let sum2 = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];

        for (let j = 0; j < array.length; j++) {
            sum2 += array[j];
            console.log(sum2);
        }
    }


    return sum + sum2;
}

console.log(sumArray([1, 2, 3]));