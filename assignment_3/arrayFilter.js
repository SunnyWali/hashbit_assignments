inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.

function returnArray(inputArr) {
  return inputArr.filter((inputArr) => inputArr > 5);
}

console.log(`The numbers greater than 5 are : ${returnArray(inputArr)}`);
