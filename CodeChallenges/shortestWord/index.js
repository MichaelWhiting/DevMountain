// Given a string of space-separated words, return the length of the shortest word.

// ex: 
// shortestWord("super cali fragile istic expiali docious") --> 4 


const shortestWord = (str) => str.split(" ").sort((a, b) => a.length - b.length)[0].length;

console.log(shortestWord("super cali fragile istic expiali docious")) // cali, 4
console.log(shortestWord("This should return the shortest word")) // the, 3

const shortestWord2 = (str) => {
    const words = str.split(" ")
    let currentShortest = words[0];
    for (const word of words) {
        if (word.length < currentShortest.length) {
            currentShortest = word;
        }
    }

    return currentShortest.length;
};

console.log(shortestWord2("super cali fragile istic expiali docious")) // cali
console.log(shortestWord2("This should return the shortest word")) // the