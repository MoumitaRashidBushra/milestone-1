//JavaScript's promise feature makes it possible to handle asynchronous actions in a way that is more readable and orderly. They enable users to attach callbacks that will be executed after the operation completes and provide a means to express the eventual success or failure of an asynchronous operation, both of which are helpful for managing asynchronous code.

// Creating a Promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts/5')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
};

// Consuming the Promise
fetchData()
    .then(result => {
        console.log("Fetched data:", result);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
