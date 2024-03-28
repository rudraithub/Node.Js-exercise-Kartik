//0707 -  write a new array that contains only the even numbers from an existing array.

let a = [1, 2, 3, 4];
let evenNumbers = [];
for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
        evenNumbers.push(a[i]);
    }
}
console.log(evenNumbers); 