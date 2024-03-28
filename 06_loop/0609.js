//0609-Write a program to find first and last digit of a number.
let num=1234;
let firstDigit=num;
let lastDigit=num%10;
while (firstDigit>=10) {
    firstDigit=parseInt(firstDigit/10)

}
console.log(firstDigit)
console.log(lastDigit)