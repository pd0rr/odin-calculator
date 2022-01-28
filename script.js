"use strict"

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

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

function generateButtonListener(display, digit) {
    return () => display.textContent += digit;
}

var operand = 0;
var number = 0;
var operator = '+';

const display = document.querySelector("#display");

const keys = [];
for (let i = 0; i <= 9; i++) {
    keys[i] = document.querySelector(`#key-${i.toString()}`);
    keys[i].addEventListener('click', () => {
        display.textContent += i.toString();
        number = Number(display.textContent);
    });
}

const clear = document.querySelector("#clear");
clear.addEventListener('click', () => {
    display.textContent = '';
    number = 0;
    operand = 0;
    operator = '+';
});

// add event listeners for operation buttons
function generateOperatorEventListener(op) {
    return () => {
        operator = op;
        operand = number;
        display.textContent = '';
        number = 0;
    }
}

const keyDivide = document.querySelector("#key-divide");
const keyMultiply = document.querySelector("#key-multiply");
const keySubtract = document.querySelector("#key-subtract");
const keyAdd = document.querySelector("#key-add");

keyDivide.addEventListener('click', generateOperatorEventListener('/'));
keyMultiply.addEventListener('click', generateOperatorEventListener('*'));
keySubtract.addEventListener('click', generateOperatorEventListener('-'));
keyAdd.addEventListener('click', generateOperatorEventListener('+'));

// add event listener for equals button
const equals = document.querySelector("#key-equals");
equals.addEventListener('click', () => {
    const result = operate(operator, operand, number);
    operand = number;
    number = result;
    display.textContent = result;
});