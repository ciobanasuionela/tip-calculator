let resetButton = document.querySelector(".reset-button");
let percentageButton = document.querySelectorAll(".percent");
let inputBill = document.querySelector('.active');
let errorMessage = document.querySelector(".error-message");
let backgroundGreen = document.querySelectorAll(".percent");

let value = inputBill.value;

// let errorMessage = document.querySelector(".error");

resetButton.addEventListener('click', function() {
    document.querySelectorAll('.input-container > input').forEach(element => {
        element.value = '0'
    });
})

inputBill.addEventListener('click', function() {

    errorMessage.style.display = "block";

    if (inputBill.value > 0) {
        errorMessage.style.display = "none";
        inputBill.style.border = "2px solid var(--main-color)";
    }

})



inputBill.addEventListener('change', function() {
    // console.log(event.target.value)
    if (inputBill.value > 0) {
        errorMessage.style.display = "none";
    };
})

backgroundGreen.forEach(element => {
    element.addEventListener("click", function() {
        element.classList.toggle("bg-green");
    })
});