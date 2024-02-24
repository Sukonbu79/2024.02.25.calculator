"use strict";
// 最初に書いたコードがキタナすぎたので整理して書き直した
// 最初に書いたコードは下にコメントアウトしてます
{
  const display = document.querySelector("#display");
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let btn = button.textContent;
      // AC,BS,=,%によるクリアと計算
      if (btn === "AC") {
        display.textContent = "";
      } else if (btn === "BS") {
        display.textContent = display.textContent.slice(0, -1);
      } else if (display.textContent !== "" && btn === "=") {
        display.textContent = eval(display.textContent);
      } else if (display.textContent != "" && btn === "%") {
        display.textContent = display.textContent / 100;
      }
      // display空白時の演算キーの無効化
      else if (
        (display.textContent === "" && btn === "=") ||
        (display.textContent === "" && btn === ")") ||
        (display.textContent === "" && btn === "%") ||
        (display.textContent === "" && btn === "÷") ||
        (display.textContent === "" && btn === "×") ||
        (display.textContent === "" && btn === "-") ||
        (display.textContent === "" && btn === ".") ||
        (display.textContent === "" && btn === "+") ||
        (display.textContent === "" && button.textContent === ")")
      ) {
        display.textContent = "";
      }
      // display空白時の0キー無効化
      else if (
        (display.textContent === "" && btn === "0") ||
        (display.textContent === "" && btn === "00") ||
        (display.textContent === "" && btn === "000")
      ) {
        display.textContent = "";
      }
      // ×、÷キー*、/に変換
      else if (btn === "÷") {
        display.textContent += "/";
      } else if (btn === "×") {
        display.textContent += "*";
      }
      // ボタンの数字displayに表示
      else {
        display.textContent += btn;
      }
    });
  });
}



// 以下：最初に書いたコード`||`使ってないのでキタナイ、、、
// {
//   const display = document.querySelector("#display");
//   const buttons = document.querySelectorAll("button");

//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       if (button.textContent === "AC") {
//         display.textContent = "";
//       } else if (button.textContent === "BS") {
//         display.textContent = display.textContent.slice(0, -1);
//       } else if (display.textContent !== "" && button.textContent === "=") {
//         display.textContent = eval(display.textContent);
//       } else if (display.textContent === "" && button.textContent === "=") {
//         display.textContent = "";
//       } else if (display.textContent != "" && button.textContent === "%") {
//         display.textContent = display.textContent / 100;
//       } else if (display.textContent === "" && button.textContent === ")") {
//         display.textContent = "";
//       } else if (display.textContent === "" && button.textContent === "%") {
//         display.textContent = "";
//       } else if (display.textContent === "" && button.textContent === "÷") {
//         display.textContent = "";
//       } else if (display.textContent === "" && button.textContent === "×") {
//         display.textContent = "";
//       } else if (display.textContent === "" && button.textContent === "-") {
//         display.textContent = "";
//       } else if (display.textContent === "" && button.textContent === ".") {
//         display.textContent = "";
//       } else if (display.textContent === "" && button.textContent === "+") {
//         display.textContent = "";
//       } else if (button.textContent === '÷') {
//         display.textContent += '/';
//       } else if (button.textContent === '×') {
//         display.textContent += '*';
//       }
//       else {
//         display.textContent += button.textContent;
//       }
//     });
//   });
// }
