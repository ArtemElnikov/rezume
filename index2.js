const resultElement = document.getElementById("result");
const value1 = document.getElementById("firstnum").value;
const value2 = document.getElementById("secondnum").value;
const submitBtn = document.getElementById("submit");

const operatorsArray = document.querySelectorAll(".operator");

let action = "+";

operatorsArray.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    action = e.target.textContent;
  });
});

function printResult(result) {
  const color = result < 0 ? "red" : "green";
  resultElement.style.color = color;
  resultElement.textContent = result;
}

const sum = (value1, value2) => value1 + value2;
const min = (value1, value2) => value1 - value2;
const del = (value1, value2) => value1 / value2;
const umn = (value1, value2) => value1 * value2;

const MAP = {
  "+": sum,
  "-": min,
  "/": del,
  "*": umn,
};

const getStrategy = (type) => MAP[type];
const calculate = getStrategy;

submitBtn.addEventListener("click", () => {
  const result = calculate(action)(+value1.value, +value2.value);
  printResult(result);
});
console.log(result)