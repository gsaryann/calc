let buttons = document.querySelectorAll(".button");
let output = document.querySelector(".output");

let buttonsBlock = document.querySelector(".buttons");
buttonsBlock.addEventListener("click", function(e) {
    if (e.target.innerText == "C") {
        output.innerHTML = "";
    } else if (e.target.innerText == "←") {
        output.innerHTML = output.innerHTML.slice(0, -1);
    } else if (e.target.innerText == "=") {
        try {
            output.innerHTML = eval(output.innerHTML);
        } catch (err) {
            alert('Неправильно введена строка: ' + err)
            output.innerHTML = "";
        }
    } else {
        output.innerHTML += e.target.innerText;
    }
});

window.addEventListener('keydown', function(event) {
    console.log(event.key);
    if (event.key == "C" || event.key == 'c' || event.key == 'с' || event.key == 'С') {
        output.innerHTML = "";
    } else if (event.key == "Backspace") {
        output.innerHTML = output.innerHTML.slice(0, -1);
    } else if (event.key == "Enter") {
        try {
            output.innerHTML = eval(output.innerHTML);
        } catch (err) {
            alert('Неправильно введена строка: ' + err)
            output.innerHTML = "";
        }
    } else if (event.key == '1' ||
        event.key == '2' ||
        event.key == '3' ||
        event.key == '4' ||
        event.key == '5' ||
        event.key == '6' ||
        event.key == '7' ||
        event.key == '8' ||
        event.key == '9' ||
        event.key == '0' ||
        event.key == '+' ||
        event.key == '-' ||
        event.key == '*' ||
        event.key == '/' ||
        event.key == '(' ||
        event.key == ')' ||
        event.key == '.') {
        output.innerHTML += event.key;
    }
});