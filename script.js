function operate(a,b,op){
    if(typeof(a) == 'number' && typeof(b) == 'number' && (op == "+" || op == "-" || op == "*" || op == "/" || op == "÷")){
        if(op == "+"){
            return add(a,b);
        }
        else if(op == "-"){
            return subtract(a,b);
        }
        else if(op == "*"){
            return multiply(a,b);
        }
        else if(op == "÷" || op == "/"){
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
    return a/b;
}