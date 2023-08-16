//find Max number

function findMaxNumber(numbers) {
    if (numbers.length === 0) {
        return undefined; // Return undefined for an empty array
    }

    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

const numbers = [5, 12, 2, 8, 19];
const maxNumber = findMaxNumber(numbers);
console.log("Maximum number:", maxNumber); // Output: Maximum number: 19
