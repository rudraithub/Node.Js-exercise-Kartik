//0606-Write a program to find sum of all even numbers between 1 to 10.
let sum = 0
num = 1
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        //console.log(i)
        sum += (i)

    }
}
console.log("sum of given even numbers "+ sum)