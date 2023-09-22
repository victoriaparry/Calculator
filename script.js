let input = document.getElementById("user-input");
console.log(input.innerText)

let number = document.querySelectorAll(".number");
let op = document.querySelectorAll(".operator");
let clear = document.querySelector("#clear");


clear.addEventListener("click", function alertme() {
    alert("clear");
});

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function alertnum() {
        alert("number");
    });
}

for (let i = 0; i < op.length; i++) {
    op[i].addEventListener("click", function alertnum() {
        alert("operator");
    });
}