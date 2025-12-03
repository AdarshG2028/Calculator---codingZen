let display = document.getElementById('display');
let currentInput = '';
let firstOperand = ' ';
let operator = '';

function appendNumber(value){
    currentInput +=value;
    display.value = currentInput;
}

function appendOperator(op){
    if(firstOperand = " "){
        firstOperand = currentInput;
        currentInput = '';
    }
    operator = op;
}

function ClearDisplay(){
    display.value = "";
    currentInput = '';
    firstOperand = ' ';
    operator = '';
}

function calculate(){   
    if(firstOperand === ' ' || operator === '' || currentInput === ''){
        return;
    }
    
    let secondOperand = currentInput;
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);

    if(operator === '+'){
    result = num1 +num2; 
    } else if(operator === '-'){
        result = num1 - num2;
    } else if(operator === '*'){
        result = num1 * num2;
    } else if(operator === '/'){
        if (secondOperand === '0') {
        display.value = "Error: Division by zero";
        return;
        }
        result = num1 / num2;
    }

    display.value = result;
    firstOperand = result.toString();
    currentInput = '';
    operator = '';
    
    

}
