//0612-Write a program to print a below pattern.

let n = 5;
let str="";

for (let i = 1; i <= n; i++) {
for (let j = 0; j< i; j++) {
      str +="*";
}
str+="\n";
}
console.log(str)