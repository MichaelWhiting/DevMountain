const convertStrCamelCase = (str) => {
    let camelCaseStr = ""
    let words = str.split("-").join(",").split("_").join(",").split(",")

    words.forEach((word, i) => {
        if (i === 0 && word[0] !== word[0].toUpperCase()) {
            camelCaseStr += word;
        } else {
            camelCaseStr += word[0].toUpperCase() + word.slice(1);
        }
    });

    return camelCaseStr;
};


console.log(convertStrCamelCase("the-stealth-warrior"))
console.log(convertStrCamelCase("The-Stealth-Warrior"))
console.log(convertStrCamelCase("The_Stealth-Warrior"))