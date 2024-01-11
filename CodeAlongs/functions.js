function calculator(num1, num2, op) {
    if (op === "+") {
        return num1 + num2;
    } else if (op === "-") {
        return num1 - num2;
    }
}

// console.log(calculator(3,2,"-"));

function addToArr(arr, num) {
    for (let i = 0; i < arr.length; i += 1) {
        arr[i] += num;
    }
    return arr;
}

// console.log(addToArr([1,2,3,4], 1));


// function weatherCheck(temp) {
//     if (temp <= 50) {
//         return 'wear a jacket';
//     } else if (temp > 300) {
//         return 'you are dead';
//     } else if (temp > 50) {
//         return 'dont worry about a jacket';
//     }
// }

// console.log(weatherCheck(55));

// recursion test
// function recursionTest(num, count) {
//     if (num === 0) {
//         console.log("Function hit IF statement");
//         return count;
//     }
//     console.log(`Function ${count} calling itself`)
//     return recursionTest(num - 1, count + 1);
// }

// console.log(recursionTest(10, 0));

function countForRed(arr) {
    let count = 0;
    let idx = 0;
    
    while (idx < arr.length) {
        if (arr[idx] === "red") {
            count++;
        }
        idx++;
    }
    
    return count;
}

let colorArr = ['red', 'blue', 'green', 'red', 'red', 'blue', 'red', 'teal', 'lime', 'purple', 'red', 'orange'];

// console.log(countForRed(colorArr));




function evenNums(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] % 2 === 0) {
            arr[i] **= 2;
        }
    }
    
    return arr;
}

let arr = [1,2,3,4,5,6,7,8,9,10];

console.log(evenNums(arr));