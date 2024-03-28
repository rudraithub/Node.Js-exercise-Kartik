//0903 - Create an object called vehicle using Object.create(). 

const vehicle={
    make:"Toyota",
    model:"camry",
    year:2022,
    wheels:4,
 
}
let vehicle1=Object.create(vehicle)
vehicle1.make="Toyota";
vehicle1.model="camry";
vehicle1.year=2022;
vehicle1.wheels=4;
vehicle1.typer="suv"

console.log(vehicle1)