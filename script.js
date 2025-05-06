let firstOperand;
let operator;
let secondOperand;

function operate(firstOperand, secondOperand, operator) {
    switch (operator) {
        case '+':
            console.log(add(firstOperand, secondOperand));
            break;
        case '-':
            console.log(subtract(firstOperand, secondOperand));
            break;
        case '*':
            console.log(multiply(firstOperand, secondOperand));
            break;
        case '/':
            console.log(divide(firstOperand, secondOperand));
            break;
        default:
            console.log("Invalid operator!")
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

