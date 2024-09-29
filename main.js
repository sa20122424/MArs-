const limit = document.querySelector(".limit");

const minusButtons = document.querySelectorAll(".btn-minus1");
const plusButtons1 = document.querySelectorAll(".btn-plus1");
const plusButtons3 = document.querySelectorAll(".btn-plus3");
const plusButtons5 = document.querySelectorAll(".btn-plus5");
const plusButtons10 = document.querySelectorAll(".btn-plus10");

function updateLimit(change) {
    let currentLimit = Number(limit.innerHTML);
    limit.innerHTML = currentLimit + change;
}

function handleMinus(index) {
    const valueCells = document.querySelectorAll(".td, .td2, .td3");
    let currentValue = Number(valueCells[index].innerHTML);
    if (currentValue >= 2) {
        valueCells[index].innerHTML = currentValue - 2;
        updateLimit(2);
    }
}

function handlePlus(index, amount) {
    const valueCells = document.querySelectorAll(".td, .td2, .td3");
    let currentValue = Number(valueCells[index].innerHTML);
    valueCells[index].innerHTML = currentValue + amount;
    updateLimit(-amount);
}

minusButtons.forEach((button, index) => {
    button.addEventListener("click", () => handleMinus(index));
});

plusButtons1.forEach((button, index) => {
    button.addEventListener("click", () => handlePlus(index, 1));
});

plusButtons3.forEach((button, index) => {
    button.addEventListener("click", () => handlePlus(index, 3));
});

plusButtons5.forEach((button, index) => {
    button.addEventListener("click", () => handlePlus(index, 5));
});

plusButtons10.forEach((button, index) => {
    button.addEventListener("click", () => handlePlus(index, 10));
});
