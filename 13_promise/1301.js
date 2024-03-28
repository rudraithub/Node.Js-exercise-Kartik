//## 1301 - create a function using promise and return array Data.


function fetchData() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            // Simulated data array
            const data = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
            

            resolve(data);
        }, 2000); // Simulated delay of 2 seconds
    });
}


fetchData()
    .then(array => {
        console.log('Fetched Data:', array);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
