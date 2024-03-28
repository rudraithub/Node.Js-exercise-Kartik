//0608 - Write a program to print multiplication table of any number.

let i = prompt("Enter The Number:")
i = Number.parseInt(i)

for (let j = 1; j <= 10; j++) {

    console.log(i + "*" + j + "=" + i * j)
}