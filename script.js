let number = document.querySelectorAll(".number");
let op = document.querySelectorAll(".operator");
let clear = document.querySelector("#clear");
let equals = document.querySelector("#equals");

let input_list = []


clear.addEventListener("click", function alertme() {
    alert("clear");
});

equals.addEventListener("click", function alertme() {
    alert("equals");
});


for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function addnum() {
        input_list.push(number[i].value);
    });
}

for (let i = 0; i < op.length; i++) {
    op[i].addEventListener("click", function operator_func() {
        input_list.push(op[i].value);
    });
}

console.log(input_list)
