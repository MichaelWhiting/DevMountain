/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function power(num1, num2) {
  return num1 ** num2;
}

function mod(num1, num2) {
  return num1 % num2;
}

function sqrt(num) {
  return num ** 0.5;
}

function factorial(num, total = 1) {
  return num === 0 ? total : factorial(num - 1, total *= num);
}

// function factorial(num) {
//   let count = num
//   let total = 1

//   while (count > 0) {
//     total *= count
//     count--;
//   }

//   return total;
// }


function calculate(expression) {
  let tokens = expression.split(' ');

  let num1;
  let num2;
  let op;

  if (tokens.length === 3){
    num1 = Number(tokens[0]);
    num2 = Number(tokens[2]);
    op = tokens[1];

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      alert("Not a number! Try again.");
      return;
    }
  } else if (tokens.length === 2) {
    num1 = Number(tokens[1]);
    op = tokens[0];

    if (Number.isNaN(num1)) {
      alert("Not a number! Try again.");
      return;
    }
  } else {
    alert("Invalid expression! Try again.");
    return;
  }

  if (op === "+") {
    return add(num1, num2);
  } else if (op === "-") {
    return subtract(num1, num2);
  } else if (op === "*") {
    return multiply(num1, num2);
  } else if (op === "/") {
    return divide(num1, num2);
  } else if (op === "^") {
    return power(num1, num2);
  } else if (op === "%") {
    return mod(num1,num2);
  } else if (op === "sqrt") {
    return sqrt(num1);
  } else if (op === "!") {
    if (Number.isInteger(num1) && num1 >= 0) {
      return factorial(num1);
    } else {
      alert("Negative number, that won't work with factorials");
      return;
    }
  }
  alert("Unrecognized operator.");
}

// // Test variables
// const questions = ["3 + 2", "3 - 2", "3 * 2", "9 / 3", "3 ^ 2", "6 % 2", "sqrt 25", "5 + 4 - 3 * 2", "5 @ 4", "! 5", "! -5"]; // 5, 1 ,6 ,3 ,9 ,0 , 5, alert("invalid expression"), alert("invalid operator")

// for (question of questions) {
//   console.log(`${question} = ${calculate(question)}`);
// } 


// switch (op) {
//   case "+": 
//     return add(num1, num2);
//   case "-": 
//     return subtract(num1, num2);
//   case "*": 
//     return multiply(num1, num2);
//   case "/": 

//   case "^": 

//   case "%": 

//   }