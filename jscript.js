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
  if (variable2 == 0) {
    return "To infinity and beyond!"
  } else {
  div = variable1 / variable2;
  return div;
  };
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
      operation = e.target.textContent;
      variable = parseFloat(field.value);
      result.textContent = variable + " " + operation;
      results.appendChild(result);
      variable1 = parseFloat(field.value);
      field.value = "";
      isFloatDisabled()
      return;
    };
  if(e.target.className =="operation" && e.target.nodeName =="BUTTON" && !operator=="") {
    variable2 = parseFloat(field.value);
    operationResult = operate(variable1, variable2, operator);
    operator = e.target.id;
    operation = e.target.textContent;
    result.textContent = operationResult + " " + operation;
    variable1 = operationResult;
    field.value = "";
    isFloatDisabled()
    };
});

const equation = document.querySelector("#equation");
equation.addEventListener("click", () => { 
  variable2 = parseFloat(field.value);
  if (typeof(variable1) !== "number" || typeof(variable2) !== "number" || variable1 == NaN || variable2 == NaN || typeof(operator) !== "string" || operator == "") {
    result.textContent = "Oops! Something went wrong!"
    field.value = "Please AC to start over"
    return;
  }
  operationResult = operate(variable1, variable2, operator);
  field.value = operationResult;
  result.textContent = variable1 + " " + operation + " " + variable2 + " =";
  variable1 = parseFloat(field.value);
  isFloatDisabled()
  variable2 = "";
  operator = "";
});

const clearData = document.querySelector("#clear");
clearData.addEventListener("click", () => {
  field.value = "";
  results.textContent = "";
  variable1 = "";
  variable2 = "";
  operator = "";
  operation = "";
  isFloatDisabled()
}
)

let floatPoint = document.querySelector("#floatPoint");
floatPoint.addEventListener("click", (e) => {
  field.value += e.target.textContent
  isFloatDisabled()
  
})

function isFloatDisabled() {
  floatPoint = document.querySelector("#floatPoint");
  let float = /[.]+/;
  if (float.test(field.value) == true) {
    floatPoint.disabled = true;
  } else {
    floatPoint.disabled = false;
  }

}