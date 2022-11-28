// math operators //
function add(a, b) {
  result += a + b;
  return result;
}

function subtract(a, b) {
  result += a - b;
  return result;
}

function multiply(a, b) {
  result += a * b;
  return result;
}

function divide(a, b) {
  result += a / b;
  return result;
}

// simple calculation function //
function operate(a, operator, b) {
  return operator(a, b);
}

let values = [];

const numArr = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  decimal: ".",
};

// Simple number pressing function //
const numbers = document.querySelector("#numbers");
const display = document.querySelector(".calculator-display");

numbers.addEventListener("click", (e) => {
  if (e.target.id == "numbers" || e.target.id == "clear") {
    return;
  } else if (
    display.textContent.indexOf("+") == -1 ||
    display.textContent.indexOf("-") == -1 ||
    display.textContent.indexOf("*") == -1 ||
    display.textContent.indexOf("/") == -1
  ) {
    display.textContent += numArr[`${e.target.id}`];
    values[0] = display.textContent;
    console.log(values[0]);
  }
});

// clear button //
const clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
  display.textContent = "";
});

const operators = document.querySelector("#operators");

const opArr = {
  plus: "+",
  minus: "-",
  multiply: "*",
  divide: "/",
};

operators.addEventListener("click", (e) => {
  if (e.target.id == "operators" || e.target.id == "equal") {
    return;
  } else if (
    display.textContent.indexOf("/0") > 0 ||
    display.textContent.indexOf("Infinity") > 0
  ) {
    display.textContent = "Error!";
  } else if (
    display.textContent.indexOf("+") > 0 ||
    display.textContent.indexOf("-") > 0 ||
    display.textContent.indexOf("*") > 0 ||
    display.textContent.indexOf("/") > 0
  ) {
    let calc = display.textContent;
    let result = eval(calc);
    display.textContent = result + opArr[`${e.target.id}`];
    console.log(result);
  } else {
    display.textContent += opArr[`${e.target.id}`];
    console.log(display.textContent);
  }
});

const equal = document.querySelector("#equal");

equal.addEventListener("click", () => {
  if (display.textContent.indexOf("/0") > 0) {
    display.textContent = "Error!";
  } else {
    let result = eval(display.textContent);
    display.textContent = result;
  }
});
