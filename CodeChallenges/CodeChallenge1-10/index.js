// Given the variables num1 and num2, write some code to evaluate the following:
// If num1 is less than num2, print to the console, "<num1> is less than <num2>"
// If num1 is greater than num2, print to the console, "<num1> is greater than <num2>"
// If num1 is equal to num2, print to the console, "These numbers are equal"
// Bonus: If either num1 or num2 is not a valid Number data type, print to the console, "Whoa, those aren't numbers!"

const numb1 = 300;
const numb2 = 200;

function evaluateNums(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return "Whoa, those aren't numbers!";
    }
    if (num1 === num2) {
        return "These numbers are equal"; 
    }
    return num1 < num2 ? `${num1} is less than ${num2}.` : `${num1} is greater than ${num2}`;
}
console.log(evaluateNums(numb1, numb2));
console.log(evaluateNums("50f", "100F"));