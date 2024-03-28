//## 1202 - Create a function to iterate through an array and use a callback for processing each item.


function processArray(array, callback) {
    // Iterate through the array
    for (let i = 0; i < array.length; i++) {
        // Call the callback function for each item in the array
        callback(array[i]);
    }
}

function processItem(item) {
    console.log("Processing item:", item);
}

const myArray = [1, 2, 3, 4, 5];
processArray(myArray, processItem);
