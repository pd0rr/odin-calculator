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
    return () => display.textcontent += digit;
}

const display = document.querySelector("#display");

const keys = [];
for (let i = 0; i <= 9; i++) {
    keys[i] = document.querySelector(`#key-${i.toString()}`);
    keys[i].addEventListener('click', () => {
        display.textContent += i.toString();
    });
}