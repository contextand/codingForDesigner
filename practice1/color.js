const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");
const background = document.querySelector(".background");
const star = document.querySelector(".star");
const span = document.createElement("span");

const changeColor = (e) => {
  background.classList.add(`${e.target.innerText}`);
  e.srcElement.classList.add("bold");
  // e.srcElement.appendChild(span);
  // span.innerText = " is..";
};
const changeColorBack = (e) => {
  background.classList.remove(`${e.target.innerText}`);
  e.srcElement.classList.remove("bold");
  // e.srcElement.removeChild(span);
};

red.addEventListener("mouseover", changeColor);
red.addEventListener("mouseout", changeColorBack);
blue.addEventListener("mouseover", changeColor);
blue.addEventListener("mouseout", changeColorBack);
yellow.addEventListener("mouseover", changeColor);
yellow.addEventListener("mouseout", changeColorBack);

// 이미지를 미리 넣어두었다가, 오파시티를 조절하는 방식으로 접근한다.
// 폰트는 베리어블 폰트 적용되는 폰트로, 두께 조절이 자연스럽게 되는 것은 해보아야 알 수 있음.
// 글자 좌측에 화살표도 넣어두었다가, 스케일 조절하는 식으로 키울 수 있을 것
