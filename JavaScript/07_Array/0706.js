// 0706 - write a new array that contains the squares of each number in the original array.

let num = [1, 2, 3, 4];
let squares = [];
num.forEach((element) => {
  squares.push(element * element);
});

console.log(squares);