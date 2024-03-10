


function sumArray(array){
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

console.time('Sum Array 1');
console.log(sumArray([1, 10, 2, 20, 3, 30]));
console.timeEnd('Sum Array 1');