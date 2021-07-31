let field = document.querySelector("#numbersfield");
let operation = "";

// Addition
function add(variable1, variable2) {
  sum = variable1 + variable2;
  return sum;
};

//Subtraction
function subtract(variable1, variable2) {
  sub = variable1 - variable2;
  return sub;
};

//Multiplication
function multiply(variable1, variable2) {
  multi = variable1 * variable2;
  return multi;
};

//Division
function divide(variable1, variable2) {
  divide = variable1 / variable2;
  return divide;
};

//operations function
function operate(variable1, variable2, operator) {
  switch(operator) {
    case "addition":
      return add(variable1, variable2);
      break;
    case "subtraction":
      return subtract(variable1, variable2);
      break;
    case "multiplication":
      return multiply(variable1, variable2);
      break;
    case "division":
      return divide(variable1 ,variable2)
      break;
  };
};

document.getElementById("calculator-container").addEventListener("click", function(e) {
  if(e.target.className =="numbers" && e.target.nodeName =="BUTTON" && operation=="") {
      variable = e.target.textContent
      field.value += variable
    }
    if(e.target.className =="numbers" && e.target.nodeName =="BUTTON" && !operation=="") {
      variable = e.target.textContent
      field.value += variable
    }
});
document.getElementById("calculator-container").addEventListener("click", function(e) {
  if(e.target.className =="operation" && e.target.nodeName =="BUTTON" && operation=="") {
      operation = e.target.textContent
      operator = e.target.id
      variable1= parseInt(field.value)
      field.value = ""
      return;
    }
  if(e.target.className =="operation" && e.target.nodeName =="BUTTON" && !operation=="") {
      variable2 = parseInt(field.value)
      field.value = operate(variable1, variable2, operator)
      variable1 = field.value
      operator = "";
      operation = "";
    }
});
