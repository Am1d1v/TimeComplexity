


function sumArray(array){
    let sum = 0;
    let sum2 = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];

        for (let j = 0; j < array.length; j++) {
            sum2 += array[j];
        }
    }

    return sum + sum2;
}

const arrayOne = [1, 2, 3, 4, 5];
console.time('Quadradic Time Array 1')
console.log(sumArray(arrayOne));
console.timeEnd('Quadradic Time Array 1');

const arrayTwo = Array.from({length: 1000}, (_, index) => index + 1);
console.time('Quadradic Time Array 2')
console.log(sumArray(arrayTwo));
console.timeEnd('Quadradic Time Array 2');

const arrayThree = Array.from({length: 10000}, (_, index) => index + 1);
console.time('Quadradic Time Array 3')
console.log(sumArray(arrayThree));
console.timeEnd('Quadradic Time Array 3');


