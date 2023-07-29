//buffer
let buffer = '0';

const screen=document.querySelector(".screen")

function buttonClick(value) {
   console.log(value);
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    }
    else{
        handleNumber(value);
    }
 
    rerender()
}

function handleNumber(number) {
    if (buffer === '0') {
        buffer = number;
    } else {
        buffer += number;
    }
  
   // 
}

function handleSymbol(symbol) {
    switch (symbol) {
        case "C":
        buffer="0";
        break;
        case "=":
        console.log("equals");
        break
        case "←":
        if (buffer.length===1) {
                buffer="0"
                console.log(buffer);
            }else{
                buffer=buffer.substring(0,buffer.length-1)
                console.log(buffer);
            } 
        console.log("back error");
        break
        case "+":
        console.log("plus");
        break
        case "-":
        console.log("minus");
        break
        case "÷":
        console.log("division");
        break
        case "×":
        console.log("math simbol");
        break
        default:
        break;
    }
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
