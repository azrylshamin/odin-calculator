// TODO: clear display after operation

let firstOperand;
let currentOperator;
let secondOperand;
let isOperation; 
let isNumber;

const display = document.querySelector("#displayContainer");
const numbersBtn = document.querySelectorAll(".numberBtn");
const operatorsBtn = document.querySelectorAll(".operatorBtn");
const equalBtn = document.querySelector("#equalBtn");
const clearBtn = document.querySelector("#clearBtn");
const decimalBtn = document.querySelector("#decimalBtn");
const deleteBtn = document.querySelector("#deleteBtn");

numbersBtn.forEach(button => button.addEventListener('click', () => numberInput(button.textContent)));

operatorsBtn.forEach(button => button.addEventListener('click', () => operatorInput(button.textContent)));

equalBtn.addEventListener('click', equalOperation);

clearBtn.addEventListener('click', reset);

decimalBtn.addEventListener('click', addDecimal);

deleteBtn.addEventListener('click', backspaceInput);

document.addEventListener('keydown', (e) => keyboardInput(e));

function numberInput (number) {
    if (isOperation == true) {
        display.textContent = '';
        isOperation = false;
    }

    display.textContent += number;
    isNumber = true;
}

function operatorInput (operator) {
    if (!isNumber) return;
    firstOperand = firstOperand == undefined ? display.textContent : equalOperation();
    currentOperator = operator;
    isOperation = true;
    isNumber = false;
}

function equalOperation () {
    secondOperand = display.textContent;

    if (operate(currentOperator, +firstOperand, +secondOperand) == NaN || operate(currentOperator, +firstOperand, +secondOperand) == undefined) {
        return;
    }
    
    if (Number.isInteger(operate(currentOperator, +firstOperand, +secondOperand))) {
        display.textContent = operate(currentOperator, +firstOperand, +secondOperand);
    } else {
        display.textContent = operate(currentOperator, +firstOperand, +secondOperand).toFixed(2);
    }

    secondOperand = '';
    currentOperator = '';

    return display.textContent;
}

function operate(operator, firstOperand, secondOperand) {
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

function addDecimal() {
    let currentInput = display.textContent;
    if (!currentInput.includes(".")) {
        display.textContent += ".";
    }
}

function backspaceInput() {
    if(display.textContent.length > 0) {
        display.textContent = display.textContent.slice(0, -1);
    }
}

function keyboardInput(e) {
    const operators = ['+', '-', '*', '/'];
    
    if (Number.isInteger(parseInt(e.key))) {
        numberInput(e.key);
    }

    if (operators.includes(e.key)){
        operatorInput(e.key);
    }


    switch(e.key){
        case '=':
            equalOperation();
            break;
        case "Delete":
            reset();
        case '.':
            addDecimal();
            break
        case "Backspace":
            backspaceInput();
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

function reset() {
    display.textContent = '';

    firstOperand = undefined;
    currentOperator = undefined;
    secondOperand = undefined;
    isOperation = false; 
    isNumber = false;
}
