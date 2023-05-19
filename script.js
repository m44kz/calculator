var mainNumber = ""; ///String version of editable number
var bufforNumber = 0;
var operatorBuffor = "";
var bufforOperator = "";

var display = document.getElementById('display');
var subDisplay = document.getElementById('subDisplay');

function num(btn){
    mainNumber += String(btn.innerHTML);
    updateDisplay(mainNumber);
}

function opp(btn){
    if(btn.innerHTML != "="){
        var operator = btn.innerHTML;
        bufforOperator = btn.innerHTML;

    }else{
        var operator = "=";

    }

    if(operator == "="){
        if(bufforNumber != ""){
            var result = calc(bufforNumber, mainNumber, bufforOperator);
            mainNumber = result;
            updateDisplay(result);

        }else{
            updateDisplay("ERROR")

        }
    }else if(operator == "C"){
        mainNumber = "";
        bufforNumber = "";
        updateSubDisplay(bufforNumber)
        updateDisplay(mainNumber);

    }else if(operator == "CE"){
        mainNumber = "";
        updateDisplay(mainNumber);

    }else if(operator == "DEL"){
        mainNumber = mainNumber.substr(0, mainNumber.length - 1);
        updateDisplay(mainNumber);

    }else{
        bufforNumber = Number(mainNumber);
        mainNumber = "";
        updateDisplay(mainNumber);
        updateSubDisplay(bufforNumber);

    }

}

function calc(_a, _b , _operator){
    console.log(_a + " " + _operator + " " + _b);

    var a = Number(_a);
    var b = Number(_b);

    updateSubDisplay("");

    switch(_operator){
        case '+':
            return a + b;
            break;
        
        case '-':
            return a - b;
            break;
        
        case 'X':
            return a * b;
            break;

        case '/':
            return a / b;
            break;
    }

}

function updateDisplay(newDisplay){
    display.innerHTML = newDisplay;
}

function updateSubDisplay(newDisplay){
    subDisplay.innerHTML = newDisplay;
}

console.log(mainNumber);