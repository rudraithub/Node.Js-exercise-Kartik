//0902 - Create two Object (person, details) and merage details object in person object.

const person = {
    name: "john",
    age: 30,
}
    const details={
    city: "NewYork",
    job: "Engineer",
};

let persondetails=Object.assign(person,details);
for (let key of Object.keys(persondetails)){
console.log(key+":"+persondetails[key])
}