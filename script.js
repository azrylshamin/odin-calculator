let firstOperand;
let currentOperator;
let secondOperand;
let isOperation; // symbolise that the current display has been use for / result of operation
//TODO: find a better way to reset the display on new set of number than "isOperation approach"

const display = document.querySelector("#displayContainer");
const numbersBtn = document.querySelectorAll(".numberBtn");
const operatorsBtn = document.querySelectorAll(".operatorBtn");
const equalBtn = document.querySelector("#equalBtn");

numbersBtn.forEach(button => button.addEventListener('click', () => numberInput(button.textContent)));

operatorsBtn.forEach(button => button.addEventListener('click', () => operatorInput(button.textContent)));

equalBtn.addEventListener('click', equalOperation)

function numberInput (number) {
    if (isOperation == true) {
        display.textContent = ''
        isOperation = false;
    }

    display.textContent += number;
}

function operatorInput (operator) {
    firstOperand = firstOperand == undefined ? display.textContent : firstOperand;
    currentOperator = operator;
    isOperation = true;
}

function equalOperation () {
    secondOperand = display.textContent;
    display.textContent = operate(+firstOperand, +secondOperand, currentOperator);
    firstOperand = display.textContent;
    isOperation = true;
}

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
