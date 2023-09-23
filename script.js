let number = document.querySelectorAll(".number");
let op = document.querySelectorAll(".operator");
let clear = document.querySelector("#clear");
let equals = document.querySelector("#equals");
let userInput = document.querySelector("#user-input");
let first = 0;
let last = 0;
let displayVal = 0;


let inputList = [];


clear.addEventListener("click", function (){
    clearDisplay();
});

function clearDisplay() {
    inputList = [];
    calcDisplay();
}


for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function addnum() {
        inputList.push(number[i].value);
        calcDisplay();
    });
}

for (let i = 0; i < op.length; i++) {
    op[i].addEventListener("click", function operator_func() {
        inputList.push(op[i].value);
        calcDisplay();
    });
}

console.log(Array.isArray(inputList))
console.log(inputList)

function calcDisplay(){
    userInput.textContent = inputList.join('');
}

equals.addEventListener("click", function(){calculate(inputList)});

function calculate(list){
    for(let i = 0; i < list.length; i++){
        if (list[i] == "+"){
            first = parseInt(list.slice(0,i).join(''));
            last = parseInt(list.slice(i+1, (list.length)).join(''));
            console.log(first+last);
            displayVal = first + last;
        }
        if (list[i] == "-"){
            first = parseInt(list.slice(0,i).join(''));
            last = parseInt(list.slice(i+1, (list.length)).join(''));
            console.log(first-last);
            displayVal = first - last;
        }
        if (list[i] == "x"){
            first = parseInt(list.slice(0,i).join(''));
            last = parseInt(list.slice(i+1, (list.length)).join(''));
            console.log(first*last);
            displayVal = first * last;
        }
        if (list[i] == "/"){
            first = parseInt(list.slice(0,i).join(''));
            last = parseInt(list.slice(i+1, (list.length)).join(''));
            console.log(first/last);
            displayVal = first/last;
        }
        inputList = [displayVal];
        userInput.textContent = displayVal;
    }
}