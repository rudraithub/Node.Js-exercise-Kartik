//0417-Write a program to input electricity unit charges and calculate total electricity bill according to the given condition:

const unit = parseInt(prompt("enter the unit"))
// const unit = 150
let charge
let surcharge

if(unit <= 50)
{
charge = 0.50
}
else if(unit <= 100){
    charge = 0.75
}
else if(unit <= 250){
charge = 1.20
}
else if(unit >= 250){
    charge >= 1.50
}

surcharge = 0.20 * (charge * unit);

const totalbill = (charge * unit) + surcharge;
console.log(totalbill)
