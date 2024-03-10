


function sumArray(array){
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

const arrayOne = [1, 10, 2, 20, 3, 30];
console.time('Sum Array 1');
console.log(sumArray(arrayOne));
console.timeEnd('Sum Array 1');


const arrayTwo = Array.from({length: 10000000}, (_, index) => index + 1);
console.time('Sum Array 2');
console.log(sumArray(arrayTwo));
console.timeEnd('Sum Array 2');