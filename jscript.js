// Addition
function add(a, b) {
  sum = a + b;
  return sum;
};

//Subtraction
function subtract(a, b) {
  sub = a - b;
  return sub;
};

//Multiplication
function multiply(a, b) {
  multi = a * b;
  return multi;
};

//Division
function divide(a, b) {
  divide = a / b;
  return divide;
};

//operations function
function operate(a, b, operator) {
  switch(operator) {
    case "add":
      return add(a, b);
      break;
    case "subtract":
      return subtract(a, b);
      break;
    case "multiply":
      return multiply(a, b);
      break;
    case "divide":
      return divide(a ,b)
      break;
  };
};