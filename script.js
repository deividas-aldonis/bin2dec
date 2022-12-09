const form = document.getElementById("form");
const input = document.getElementById("form-input");

const binaryResultDisplay = document.getElementById("binary");
const decimalResultDisplay = document.getElementById("decimal");
const errorMessage = document.querySelector(".error-message");

let isInputValid = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!isInputValid) return;

  const binary = input.value;
  let reverseBinary = "";
  let decimal = 0;

  for (let i = binary.length - 1; i >= 0; i--) {
    reverseBinary += binary[i];
  }

  for (let i = 0; i < reverseBinary.length; i++) {
    if (reverseBinary[i] === "0") continue;

    decimal += 1 * 2 ** i;
  }

  binaryResultDisplay.textContent = binary;
  decimalResultDisplay.textContent = decimal;

  e.target.reset();
});

input.addEventListener("input", (e) => {
  isInputValid = /^[01]{1,8}$/.test(e.target.value);

  if (!isInputValid) {
    errorMessage.textContent = `input can contain only 1's and 0's and length has to be between 1-8`;
    errorMessage.classList.remove("hide");
    e.target.classList = "error";
  } else {
    errorMessage.textContent = "";
    errorMessage.classList.add("hide");
    e.target.classList = "success";
  }
});
