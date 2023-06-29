const outputElement = document.querySelector("#output");
const btnCopy = document.querySelector("#btnCopy");
const passwordLengthElement = document.querySelector("#length");
const numberElement = document.querySelector("#number");
const capitalElement = document.querySelector("#capital");
const smallElement = document.querySelector("#small");
const symbolsElement = document.querySelector("#symbols");
const frm = document.querySelector("#frm");

//button click to copy password

btnCopy.addEventListener("click", async () => {
  const pass = outputElement.value;
  console.log(pass);
  if (pass) {
    await navigator.clipboard.writeText(pass);
    alert("Copied to clipboard");
  } else {
    alert("There is no password to copy");
  }
});

//  random character generator

function randomCharGen(min, max) {
  limit = max - min + 1;
  return String.fromCharCode(Math.floor(Math.random() * limit) + min);
}

// letter , number & character creator

function capitalValue() {
  return randomCharGen(65, 90);
}

function smallValue() {
  return randomCharGen(97, 122);
}

function numberValue() {
  return randomCharGen(48, 57);
}

function symbols() {
  const symbols = "~`!@#$%^&*()_-+=}{][:;/?>,>./|";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

const functionArray = [
  {
    element: numberElement,
    fun: numberValue,
  },
  {
    element: capitalElement,
    fun: capitalValue,
  },
  {
    element: smallElement,
    fun: smallValue,
  },
  {
    element: symbolsElement,
    fun: symbols,
  },
];

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const limit = passwordLengthElement.value;
  let generator = "";
  const funArray = functionArray.filter(({ element }) => element.checked);
  for (i = 0; i < limit; i++) {
    const index = Math.floor(Math.random() * funArray.length);
    const letter = funArray[index].fun();
    generator += letter;
  }
  outputElement.value = generator;
});
