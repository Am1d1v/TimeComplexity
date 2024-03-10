


/* 
  Space Complexity: O(1);
  Time Complexity: O(1);
*/
function add(num1, num2){
  return num1 + num2;
}


/* 
  Space Complexity: O(n);
  Time Complexity: O(n);
*/
function createArray(num){

  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(i);
  }

  return arr;
}


/* 
  Space Complexity: O(n^2);
  Time Complexity: O(n^2);
*/
function createMatrix(num){

  const matrix = [];

  for (let i = 0; i < num; i++) {
    
    matrix[i] = [];

    for (let j = 0; j < num; j++) {
      
      matrix[i][j] = j + i;
      
    }

  }

  return matrix;

}
