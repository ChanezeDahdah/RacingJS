const inscreaseFontSizeButton = document.getElementsByTagName("button")[0];
const decreaseFontSizeButton = document.getElementsByTagName("button")[1];
const colorDropDownSelect = document.getElementsByTagName("select")[0];
const body = document.getElementsByTagName("body")[0];

let fontSize = parseInt(window.getComputedStyle(body, null).getPropertyValue('font-size').slice(0,-2));

inscreaseFontSizeButton.addEventListener("click", increaseFontSize);
decreaseFontSizeButton.addEventListener("click", decreaseFontSize);
colorDropDownSelect.addEventListener("change", changeColor);

function increaseFontSize() {
    fontSize +=1;
    body.style.fontSize = fontSize + "px";
}

function decreaseFontSize() {
    fontSize -=1;
    body.style.fontSize = fontSize + "px";
}

function changeColor() {
    const newColor = colorDropDownSelect.options[colorDropDownSelect.selectedIndex].value;
    body.style.backgroundColor = newColor;
}