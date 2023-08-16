// Find min value in a object

function findMinValueObject(objects) {
    if (objects.length === 0) {
        return undefined; // Return undefined for an empty array
    }

    let minValueObject = objects[0];
    for (let i = 1; i < objects.length; i++) {
        if (objects[i].value < minValueObject.value) {
            minValueObject = objects[i];
        }
    }
    return minValueObject;
}

const data = [
    { name: "Mou", value: 200 },
    { name: "Mita", value: 110 },
    { name: "Ashik", value: 150 },
    { name: "Bushra", value: 59 },
];

const minObject = findMinValueObject(data);
console.log("Object with minimum value:", minObject); // Output: Object with minimum value: { name: "D", value: 5 }
