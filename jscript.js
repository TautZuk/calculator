let field = document.querySelector("#numbersfield");
let results = document.querySelector("#results");
let operation = "";
let operator = "";
let variable1;
let variable2;
const result = document.createElement("div");
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
      return divide(variable1, variable2);
      break;
  };
};

document.getElementById("calculator-container").addEventListener("click", (e) => {
  if(e.target.className =="numbers" && e.target.nodeName =="BUTTON" && operator=="") {
      variable = e.target.textContent;
      field.value += variable;
    };
    if(e.target.className =="numbers" && e.target.nodeName =="BUTTON" && !operator=="") {
      variable = e.target.textContent;
      field.value += variable;
    };
});

document.getElementById("calculator-container").addEventListener("click", (e) => {
  if(e.target.className =="operation" && e.target.nodeName =="BUTTON" && operator=="") {
      operator = e.target.id;
      variable1= parseInt(field.value);
      result.textContent = variable1;
      results.appendChild(result);
      field.value = "";
      return;
    };
  if(e.target.className =="operation" && e.target.nodeName =="BUTTON" && !operator=="") {
    variable2 = parseInt(field.value);
    result.textContent = operate(variable1, variable2, operator);
    results.appendChild(result);
    field.value = "";
    variable1 = parseInt(results.textContent);
    operator = e.target.id;
    };
});

const equation = document.querySelector("#equation");
equation.addEventListener("click", () => {
  variable2 = parseInt(field.value);
  operationResult = operate(variable1, variable2, operator);
  result.textContent = operationResult;
  results.appendChild(result);
  field.value = "";
  variable1 = parseInt(results.textContent);
  operator = "";
});

const clearData = document.querySelector("#clear");
clearData.addEventListener("click", () => {
  field.value = "";
  results.textContent = "";
  variable1 = "";
  variable2 = "";
  operator = "";
}
)