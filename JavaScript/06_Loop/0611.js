//0611-Write a program to check whether a number is Prime number or not.

let num = prompt("Enter The Number:")
num = Number.parseInt(num)

  
if ((num/2)%1) {
    console.log("prime number")
}
else{
    console.log("not prime number")
}