// "use strict";

// document.addEventListener("DOMContentLoaded", load);

// function load() {
//   document.querySelector("#clear").addEventListener("click", clear);
//   document.querySelector("#calculate").addEventListener("click", calculatePlus);
// }

// function calculatePlus() {
//   const value1 = document.querySelector("#firstnumber").value;
//   const value2 = document.querySelector("#secondnumber").value;
//   //   document.querySelector("#results").innerHTML = value1 + value2;
//   let operator = document.querySelector("#operator").value;
// }

//   Number.parsInt(value, 10);
// }

// function readoperator () {

// }

// function clear() {
//   document.querySelector("#results").innerHTML = "<li>0</li> <li>0</li> <li>0</li> <li>0</li>";
// }

const operator = document.getElementById("operator");
const calculate = document.getElementById("calculate");
const results = document.getElementById("results");
const doround = document.getElementById("doround");
const decimals = document.getElementById("decimals");

calculate.addEventListener("click", function () {
  let num1 = Number(document.querySelector("#firstnumber").value);
  let num2 = Number(document.querySelector("#secondnumber").value);
  if (operator.value === "add") {
    res = num1 + num2;
  } else if (operator.value === "sub") {
    res = num1 - num2;
  } else if (operator.value === "mul") {
    res = num1 * num2;
  } else if (operator.value === "div") {
    res = num1 / num2;
  }
  //   if (doround.checked) {
  //     res = res.toFixed(decimals.value);
  //   }
  results.innerHTML = "<li>" + res + "</li>" + results.innerHTML;
});

document.getElementById("clear").addEventListener("click", function () {
  results.innerHTML = "";
});
