

function accessElement(array, index){
  return array[index]
}

const arrayOne = [1, 2, 3, 4, 5];
console.time('Access Element 3');
console.log(accessElement(arrayOne, 2));
console.timeEnd('Access Element 3')


const arrayTwo = Array.from({length: 100}, (_, index) => index + 1);
console.time('Access Element 90');
console.log(accessElement(arrayTwo, 89));
console.timeEnd('Access Element 90')