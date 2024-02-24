"use strict";

{
  const display = document.querySelector("#display");
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.textContent === "AC") {
        display.textContent = "";
      } else if (button.textContent === "BS") {
        display.textContent = display.textContent.slice(0, -1);
      } else if (display.textContent !== "" && button.textContent === "=") {
        display.textContent = eval(display.textContent);
      } else if (display.textContent === "" && button.textContent === "=") {
        display.textContent = "";
      } else if (display.textContent != "" && button.textContent === "%") {
        display.textContent = display.textContent / 100;
      } else if (display.textContent === "" && button.textContent === ")") {
        display.textContent = "";
      } else if (display.textContent === "" && button.textContent === "%") {
        display.textContent = "";
      } else if (display.textContent === "" && button.textContent === "÷") {
        display.textContent = "";
      } else if (display.textContent === "" && button.textContent === "×") {
        display.textContent = "";
      } else if (display.textContent === "" && button.textContent === "-") {
        display.textContent = "";
      } else if (display.textContent === "" && button.textContent === ".") {
        display.textContent = "";
      } else if (display.textContent === "" && button.textContent === "+") {
        display.textContent = "";
      } else if (button.textContent === '÷') {
        display.textContent += '/';
      } else if (button.textContent === '×') {
        display.textContent += '*';
      }
      else {
        display.textContent += button.textContent;
      }
    });
  });
}
