const textArray = [
  "Zero Account Opening Charges",
  "Hassle-Free Setup",
  "Real-Time IPO access",
];

let index = 0;

const textElement = document.getElementById("changing-text");

function changeText() {
  textElement.textContent = textArray[index];
  index = (index + 1) % textArray.length;
}

setInterval(changeText, 3000);
changeText();
