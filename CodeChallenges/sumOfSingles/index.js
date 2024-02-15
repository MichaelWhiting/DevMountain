function repeats(arr){
    const set = new Set(arr); // makes a set with the values of each of the numbers
    let sum = 0;

    set.forEach((num) => {
        const countOfEach = arr.filter((numb) => num === numb); // checks how many of num there are in the orignal arr

        if (countOfEach.length === 1) { // this means it only appears in the original arr once.
            sum += num;
        }
    })

    return sum;
};

console.log(repeats([4,5,7,5,4,8])) // 15
console.log(repeats([9, 10, 19, 13, 19, 13])) // 19
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11])) // 12
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13])) // 22
console.log(repeats([5, 10, 19, 13, 10, 13])) // 24