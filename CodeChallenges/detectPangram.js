
const detectPangram = (string) => {
    const letters = string.split("").filter((letter) => !".,'!? 1234567890".includes(letter)).map((letter) => letter.toLowerCase());
    return [...new Set(letters)].length === 26;
}



console.log(detectPangram("The quick brown fox jumps over the lazy dog")); // true
console.log(detectPangram("This should return false")); // false
console.log(detectPangram("Sphinx of black quartz, judge my vow.")); // true
console.log(detectPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ")) // true