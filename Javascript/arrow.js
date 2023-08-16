// Regular function
function add(a, b) {
    return a + b;
}

// Equivalent arrow function
const addArrow = (a, b) => a + b;

// Arrow function with implicit return
const multiply = (a, b) => a * b;

// Arrow function with no parameters
const sayHello = () => {
    console.log("Hello Moumita!");
};


console.log(add(2, 8)); // Output: 10
console.log(addArrow(2, 7)); // Output: 9



console.log(multiply(4, 50)); // Output: 200

sayHello();

