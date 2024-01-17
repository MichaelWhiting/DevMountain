// Given an input array of numbers, return an array where each element is the square of the original number.
// ex: squareArr([1, 2, 5, 7, 9])  —> [1, 4, 25, 49, 81]

function squareArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] **= 2;
    }
    
    return arr;
}

let numbers = [1, 2, 5, 7, 9];
console.log(squareArr(numbers)); //  —> [1, 4, 25, 49, 81]