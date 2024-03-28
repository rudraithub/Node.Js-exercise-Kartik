//0412-Write a program to input any character and check whether it is alphabet, digit or special character.

let char = prompt("Enter The Character")

if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
    console.log("character is alphabet")
}
else if (char >= 1 && char <= 9) {
  console.log("character is digit")
}

else {
    console.log("character is special character")
}