
//## 1201 - Create a function that performs a simple addition operation and uses a callback to display the result.

function addNumbers(num1, num2, callback) {
    const result = num1 + num2;
    
    callback(result);
}
function displayResult(result) {
    console.log("The result of addition is:", result);
}
const number1 = 5;
const number2 = 10;

addNumbers(number1, number2, displayResult);
