//0314- WAP structure enter employee salary and count TA(10%), DA(7%) and PF(12%) of basic salary

let a = prompt("Enter The basic salary");

let ta = a * 0.10;
let da = a * 0.07;
let pf = a * 0.12
let totalsalary=a-ta-da+pf;
console.log("TA (10%):",ta)
console.log("DA (7%):",da)
console.log("PF (12%):",pf)
console.log("Total Salary:",totalsalary)