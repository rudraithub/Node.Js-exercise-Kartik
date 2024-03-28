//0416-Write a program to input basic salary of an employee and calculate its Gross salary according to following:

const basicsalary = parseInt(prompt("Enter your basic salary"))
// const basicsalary = 22000

let hra
let da
if (basicsalary <= 10000) {
    hra = 20
    da = 8
} else if (basicsalary <= 20000) {
    hra = 25;
    da = 9
} else if (basicsalary > 20000) {
    hra = 30
    da = 95
}

// Calculate HRA and DA amounts
const hrap = (hra / 100) * (basicsalary);
const dap = (da / 100) * (basicsalary);

// Calculate gross salary
const grossSalary = basicsalary + hrap + dap;

console.log("grossSalary=",grossSalary)