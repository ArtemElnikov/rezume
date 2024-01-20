const resultElement = document.getElementById('result')
const firstnum = document.getElementById('firstnum')
const secondnum = document.getElementById('secondnum')
const submitBtn = document.getElementById('submit')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const delenie = document.getElementById('delenie')
const umnojenie = document.getElementById('umnojenie')
let action = '+'

plus.onclick = function() {
    action = '+'
}

minus.onclick = function() {
    action = '-'
}

delenie.onclick = function() {
    action = '/'
}

umnojenie.onclick = function() {
    action = '*'
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeNumbersWithAction(val1, val2, actionSymbol) {
const num1 = +(val1.value)
const num2 = +(val2.value)
if (actionSymbol == '+') {
    return num1 + num2
} else if (actionSymbol == '-') {
    return num1 - num2
} else if (actionSymbol == '/') {
    return num1 / num2
} else if (actionSymbol == '*') {
    return num1 * num2
}
}

submitBtn.onclick = function() {
    const result = computeNumbersWithAction(firstnum, secondnum, action)
    printResult(result)
}

/* мой вариант
plus.onclick = function() {
    const sum = +firstnum.value + +secondnum.value 
    resultElement.textContent = sum
}

minus.onclick = function() {
    const sum = +firstnum.value - +secondnum.value 
    resultElement.textContent = sum
} */