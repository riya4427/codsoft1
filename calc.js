let currentInput = '';
let operator = '';
let operand1 = '';
let operand2 = '';

function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    operand1 = '';
    operand2 = '';
    updateDisplay();
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperation(op) {
    if (currentInput === '') return;
    if (operand1 !== '') {
        calculateResult();
    }
    operand1 = currentInput;
    operator = op;
    currentInput = '';
}

function calculateResult() {
    if (operand1 === '' || currentInput === '') return;
    operand2 = currentInput;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
        case '-':
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
        case '*':
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
        case '/':
            result = parseFloat(operand1) / parseFloat(operand2);
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = '';
    operand1 = '';
    operand2 = '';
    updateDisplay();
}
