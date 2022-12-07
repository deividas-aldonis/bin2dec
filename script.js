const form = document.getElementById("form");
const input = document.getElementById("form-input");

const binaryResultDisplay = document.getElementById("binary");
const decimalResultDisplay = document.getElementById("decimal");

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
  e.target.classList = isInputValid ? "success" : "error";
});
