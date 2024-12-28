const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((sum, num) => { return sum = sum + num }, 0);
};

const multiply = function (arr) {
  return arr.reduce((product, num) => { return product * num }, 1);
};

const power = function (num1, num2) {
  return num1 ** num2
};

const factorial = function (num) {
  let result = 1
  if (num == 0) {
    return 1;
  }
  if (num < 0) {
    return "Please Enter the valid number";
  }
  for (i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
