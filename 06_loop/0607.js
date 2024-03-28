//0607 - Write a program to find sum of all odd numbers from 1 to 10 using for loop.

let sum = 0
num = 1
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 1) {
        //console.log(i)
        sum += (i)

    }
}
console.log("sum of given odd numbers "+ sum)

