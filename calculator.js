let buffer = '0';
const screen=document.querySelector(".screen")
function buttonClick(value) {
    console.log(value);
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    }
    handleNumber(value);
}

function handleNumber(number) {
    if (buffer === '0') {
        buffer = number;
    } else {
        buffer += number;
    }
    console.log(buffer);
    rerender()
}

function handleSymbol(symbol) {
    console.log("simbol");
}

function init() {
    document
        .querySelector(".calc-buttons")
        .addEventListener("click", function (event) {
            buttonClick(`${event.target.innerText}`);
        });
}

function rerender() {
    screen.innerText=buffer
}
init();
