//0415-Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. 
//Calculate percentage and grade according to following:

let physics = parseInt(prompt("Enter the physics mark"))
let chemistry = parseInt(prompt("Enter the chemistry mark"))
let biology = parseInt(prompt("Enter the Biology mark"))
let mathematics = parseInt(prompt("Enter the Mathematics mark"))
let computer = parseInt(prompt("Enter the Computer mark"))

let totalmark = physics + chemistry + biology + mathematics + computer
console.log(totalmark)

let Percentage = (totalmark / 500) * 100;
console.log("Percentage : ", Percentage)

if (Percentage >= 90) {
    console.log("Grade A")
}
else if (Percentage >= 80) {
    console.log("Grade B")
}
else if (Percentage >= 70) {
    console.log("Grade C")
}
else if (Percentage >= 60) {
    console.log("Grade D")
}
else if (Percentage >= 40) {
    console.log("Grade E ")
}
else {
    console.log("Grade f")

}