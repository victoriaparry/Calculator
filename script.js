let number = document.querySelectorAll(".number");
let op = document.querySelectorAll(".operator");
let clear = document.querySelector("#clear");
let equals = document.querySelector("#equals");
let userInput = document.querySelector("#user-input");
let pastCalcs = document.querySelector("#past-calcs")
let displayVal = 0;
let opSet = new Set(["+", "-", "x", "/"]);
let canAddOperator = true;

let past = []
let inputList = [];

clear.addEventListener("click", function (){
    clearDisplay();
});

function clearDisplay() {
    inputList = [];
    calcDisplay();
    canAddOperator = true;
}

function calcDisplay(){
    userInput.textContent = inputList.join('');
    past = [];
}

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function addnum() {
        inputList.push(number[i].value);
        calcDisplay();
    });
}

for (let i = 0; i < op.length; i++) {
    op[i].addEventListener("click", function operator_func() {
        if (!canAddOperator || inputList.length == 0 || opSet.has(inputList[inputList.length - 1])) {
            return; // exit the function early
        }
        canAddOperator = false; 
        inputList.push(op[i].value);
        calcDisplay();
    });
}

equals.addEventListener("click", function(){
    calculate(inputList)
    canAddOperator = true; 
});

function calculate(list){
    for(let i = 0; i < list.length; i++){
        let first = parseFloat(list.slice(0, i).join(''));
        let last = parseFloat(list.slice(i + 1, (list.length)).join(''));
        if (list[i] == "+"){
            displayVal = add(first, last);
        }
        if (list[i] == "-"){
            displayVal = sub(first, last);
        }
        if (list[i] == "x"){
            displayVal = multiply(first, last);
        }
        if (list[i] == "/"){
            displayVal = divide(first, last);
        }
        inputList = [displayVal];
        calcDisplay();
      }
      past.push(displayVal)
      console.log(past)
      for (i = 0; i < past.length; ++i) {
        let li = document.createElement('li');
        li.innerText = past[i];
        pastCalcs.appendChild(li);
     }
}

function add(first, last) {
    return first + last;
}

function sub(first, last) {
    return first - last;
}

function multiply(first, last) {
    return first * last;
}

function divide(first, last) {
    if (last === 0) {
        console.error("Cannot divide by zero!");
        return "ERROR";
    }
    return first / last;
}


//     let newList = [];

//     // Handle multiplication and division first
//     for (let i = 0; i < list.length; i++) {
//         if (list[i] === "x") {
//             let prev = parseFloat(newList.pop());
//             let next = parseFloat(list[++i]);
//             newList.push(prev * next);
//         } else if (list[i] === "/") {
//             let prev = parseFloat(newList.pop());
//             let next = parseFloat(list[++i]);
//             if(next === 0) {
//                 console.error('Division by zero is not allowed');
//                 return;
//             }
//             newList.push(prev / next);
//         } else {
//             newList.push(list[i]);
//         }
//     }
    
//     // Handle addition and subtraction
//     let newResult = parseFloat(newList[0]);
//     for (let i = 1; i < newList.length; i += 2) {
//         let operator = newList[i];
//         let nextVal = parseFloat(newList[i + 1]);
//         if (operator === '+') {
//             newResult += nextVal;
//         } else if (operator === '-') {
//             newResult -= nextVal;
//         }
//     }
    
//     inputList = [newResult];
//     calcDisplay();
// }
