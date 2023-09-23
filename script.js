let number = document.querySelectorAll(".number");
let op = document.querySelectorAll(".operator");
let clear = document.querySelector("#clear");
let equals = document.querySelector("#equals");
let userInput = document.querySelector("#user-input");

let inputList = [];


clear.addEventListener("click", function clear() {
    inputList = [];
    calcDisplay();
});

equals.addEventListener("click", function alertme() {
    alert("equals");
});


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

function calcDisplay(){
    userInput.innerText = inputList.join('');
}