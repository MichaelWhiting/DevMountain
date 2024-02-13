// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

const countPositivesSumNegatives = (input) => {
    if (!input|| input.length === 0) return [];
    let count = 0, sum = 0;
    
    for (const num of input) {
        if (num > 0) {
            count++;
        } else {
            sum += num;
        }
    }

    return [count, sum];
}

const countPositivesSumNegatives2 = (input) => {
    if (!input || input.length === 0) return [];
    const count = input.filter((num) => num > 0).length;
    const sum = input.filter((num) => num < 0).reduce((a, c) => a + c);
    return [count, sum];
}

const countPositivesSumNegatives3 = (input) => {
    return !input || input.length === 0 ? [] : 
    [input.filter((num) => num > 0).length, input.filter((num) => num < 0).reduce((a, c) => a + c)];
}

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
console.log(countPositivesSumNegatives(input));
console.log(countPositivesSumNegatives2(input));
console.log(countPositivesSumNegatives3(input));