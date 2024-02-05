// Given an array of at least 4 numbers, return the sum of the 2 smallest numbers in the array
// ex:
// [25, 5, 16, 7, 90] --> 12

const sumOfSmallest2 = (nums) => {
    const sortedNums = nums.sort((a, b) => a - b);
    return sortedNums[0] + sortedNums[1];
}

const sumOfSmallest = (nums) => nums.sort((a, b) => a - b).splice(0,2).reduce((a, c) => a + c);

console.log(sumOfSmallest([25, 5, 16, 7, 90])) // 12
console.log(sumOfSmallest([12, 15, 3, 4, 98])) // 7

console.log(sumOfSmallest2([25, 5, 16, 8, 90])) // 13
console.log(sumOfSmallest2([12, 15, 5, 4, 98])) // 9

// function test(){
//     for(let i = 0; i < 1000000; i++){
//         console.log(sumOfSmallest([25, 5, 16, 8, 90])) // 13
//         console.log(sumOfSmallest([12, 15, 5, 4, 98])) // 9
//     }
// }

// let start = Date.now();
// test();
// let timeTaken = Date.now() - start;
// console.log("Total time taken : " + timeTaken + " milliseconds");


// 1: 1019ms // 9084ms
// 2: 906ms // 9227ms
