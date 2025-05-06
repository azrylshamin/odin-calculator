let firstOperand;
let operator;
let secondOperand;
let isOperation; // symbolise that the current display has been use for / result of operation
//TODO: find a better way to reset the display on new set of number than "isOperation approach"

const display = document.querySelector("#displayContainer");
const numbersBtn = document.querySelectorAll(".numberBtn");
const operatorsBtn = document.querySelectorAll(".operatorBtn");
const equalBtn = document.querySelector("#equalBtn");

numbersBtn.forEach(button => button.addEventListener('click', () => {
    if (isOperation == true) {
        display.textContent = ''
        isOperation = false;
    }

    display.textContent += button.textContent
}));

operatorsBtn.forEach(button => button.addEventListener('click', () => {
    firstOperand = firstOperand == undefined ? display.textContent : firstOperand;
    operator = button.textContent;
    isOperation = true;
}))

equalBtn.addEventListener('click', () => {
    secondOperand = display.textContent;
    display.textContent = operate(+firstOperand, +secondOperand, operator);
    firstOperand = display.textContent;
    isOperation = true;
})

function operate(firstOperand, secondOperand, operator) {
    switch (operator) {
        case '+':
            return add(firstOperand, secondOperand);
        case '-':
            return subtract(firstOperand, secondOperand);
        case '*':
            return multiply(firstOperand, secondOperand);
        case '/':
            return divide(firstOperand, secondOperand);
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
