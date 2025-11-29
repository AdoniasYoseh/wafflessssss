const display = document.getElementById("display");

function appendToDisplay(input) {
    console.log(input);
    display.innerText += input;
}

function clearDisplay() {
    display.innerText = "";
}

function calculate() {
    console.log(display.innerText);
    console.log(eval(`${display.innerText}`))
    display.innerText = `${eval(display.innerText)}`;
}