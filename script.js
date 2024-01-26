function clearDisplay() {
    document.forms[0].display.value = '';
}

function deleteLast() {
    var currentValue = document.forms[0].display.value;
    document.forms[0].display.value = currentValue.slice(0, -1);
}

function appendCharacter(char) {
    document.forms[0].display.value += char;
}

function calculateResult() {
    document.forms[0].display.value = eval(document.forms[0].display.value);
}
