var inputElement = document.getElementById('input');

function onNumberButtonClick(number) {
    setValueToInput(number);
}

function setValueToInput(number) {
    inputElement.innerText = number;
}