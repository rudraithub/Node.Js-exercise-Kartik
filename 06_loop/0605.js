//0605-Write a program to find the
// sum of all natural numbers between 1 to 10 using for loop. 
let sum=0
let n = prompt("Enter The Number:")
n = Number.parseInt(n)
for (let i = 0; i < 10; i++) {
    console.log(i + 1)
    sum += (i + 1)
   
}
console.log("sum of first " + n + " natural number is " + sum) 