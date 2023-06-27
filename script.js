const display = document.querySelector("#display");
let heldValue = display.textContent;

let operating = false;
let operator = "";
let prevNum = "";

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        updateDisplay(button);
    });
});

function updateDisplay(button){
    if(button.classList.contains("num") && operating == false){
        if(heldValue == "0"){
            display.textContent = "";
            heldValue = display.textContent;
        }
        display.textContent = (heldValue + button.textContent);
        heldValue = display.textContent;
    }
    else if(button.classList.contains("num") && operating == true){
        if(heldValue == "0"){
            display.textContent = "";
            heldValue = display.textContent;
        }
        display.textContent = (heldValue + button.textContent);
        heldValue = display.textContent;
    }
    else if(button.classList.contains("op")){
        operator = button.textContent;
        if(operating == false){
            operating = true;
            prevNum = heldValue;
            snapshot();
        }
    }
    else if(button.classList.contains("eval")){
        if(operating == true){
            display.textContent = precisionRound(operate(prevNum,display.textContent,operator),3);
            heldValue = display.textContent;
            operating = false;
        }
    }
    else if(button.classList.contains("clr")){
        reset();
    }
}

function precisionRound(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

function snapshot(){
    display.textContent = heldValue;
    heldValue = "0";
}

function reset(){
    display.textContent = "0";
    heldValue = display.textContent;
    operating = false;
    operator = "";
    prevNum = "";
}

function operate(a,b,op){
    a = Number(a);
    b = Number(b);
    if(typeof(a) == 'number' && typeof(b) == 'number' && (op == "+" || op == "-" || op == "*" || op == "x" || op == "/" || op == "÷")){
        if(op == "+"){
            return add(a,b);
        }
        else if(op == "-"){
            return subtract(a,b);
        }
        else if(op == "*" || op == "x"){
            return multiply(a,b);
        }
        else if((op == "÷" || op == "/")){
            return divide(a,b);
        }
        else{
            return "ERROR";
        }
    }
    else{
        return "ERROR";
    }

}

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b == 0){
        return "ERROR";
    }
    return a/b; 
}