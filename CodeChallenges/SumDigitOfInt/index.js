// Given a positive integer, write a function that will return the sum of each digit of the integer.
// ex: sumDigits(9119) -> 9 + 1 + 1 + 9 -> 20

const sumDigits2 = (num) => {
    const nums = String(num).split('');
    let sum = 0;
    for (const num of nums) {
        sum += +num
    }
    return sum;
}

// plus before the acc is basically the same as passing in a 0 as the 2nd param.

const sumDigits = (num) => String(num).split('').reduce((acc,cur) => +acc + +cur);

console.log(sumDigits(9119));
console.log(sumDigits(1234));
console.log(sumDigits(159));
console.log(sumDigits(9999));
