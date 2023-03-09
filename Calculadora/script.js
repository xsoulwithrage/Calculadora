let calculation = '';
let display = document.getElementById('result');

function insertNumber(num) {
    calculation += num;
    display.innerHTML = calculation;
}

function insertSymbol(symbol) {
    calculation += symbol;
    display.innerHTML = calculation;
}

function clearDisplay() {
    calculation = '';
    display.innerHTML = '0';
}

function backspace() {
    calculation = calculation.slice(0, -1);
    display.innerHTML = calculation || '0';
}

function calculate() {
    let result;
    try {
        result = eval(calculation);
    } catch (error) {
        result = 'Error';
    }
    display.innerHTML = result;
    calculation = '';
}
