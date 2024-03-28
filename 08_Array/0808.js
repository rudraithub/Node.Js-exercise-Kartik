//0708 -  write a code to find first even numbers from an existing array.
let a = [1, 2, 3, 4];
let evenNumbers = [];
for (let i = 0; i <2 ; i++) {
    if (a[i] % 2 === 0) {
        evenNumbers.push(a[i]);
    }
}
console.log(evenNumbers);