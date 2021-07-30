let field = document.querySelector("#numbersfield")
console.log(field)

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

document.getElementById("calculator-container").addEventListener("click", function(e) {
  if(e.target.className =="numbers" && e.target.nodeName =="BUTTON") {
      variable1 = e.target.textContent
      field.value += variable1
      displayvalue = field.value
    }
});