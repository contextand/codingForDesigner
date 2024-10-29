const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");
const background = document.querySelector(".background");
const star = document.querySelector(".star");
const redImg = document.querySelector(".red_imgbox");
const blueImg = document.querySelector(".blue_imgbox");
const yellowImg = document.querySelector(".yellow_imgbox");

// const changeColor = (e) => {
//   background.classList.add(`${e.target.innerText}`);
//   e.srcElement.classList.add("bold");
//   if (redImg.classList.contains("opacity") === true) {
//     redImg.classList.remove("opacity");
//   } else {
//     redImg.classList.add("opacity");
//   }
// };
// const changeColorBack = (e) => {
//   background.classList.remove(`${e.target.innerText}`);
//   e.srcElement.classList.remove("bold");
//   if (redImg.classList.contains("opacity") === true) {
//     redImg.classList.remove("opacity");
//   } else {
//     redImg.classList.add("opacity");
//   }
// };
const changeRedColor = (e) => {
  background.classList.add(`${e.target.innerText}`);
  red.classList.add("bold");
  if (redImg.classList.contains("opacity") === true) {
    redImg.classList.remove("opacity");
  } else {
    redImg.classList.add("opacity");
  }
};
const changeRedColorBack = (e) => {
  background.classList.remove(`${e.target.innerText}`);
  red.classList.remove("bold");
  if (redImg.classList.contains("opacity") === true) {
    redImg.classList.remove("opacity");
  } else {
    redImg.classList.add("opacity");
  }
};
const changeBlueColor = (e) => {
  background.classList.add(`${e.target.innerText}`);
  blue.classList.add("bold");
  if (blueImg.classList.contains("opacity") === true) {
    blueImg.classList.remove("opacity");
  } else {
    blueImg.classList.add("opacity");
  }
};
const changeBlueColorBack = (e) => {
  background.classList.remove(`${e.target.innerText}`);
  blue.classList.remove("bold");
  if (blueImg.classList.contains("opacity") === true) {
    blueImg.classList.remove("opacity");
  } else {
    blueImg.classList.add("opacity");
  }
};
const changeYellowColor = (e) => {
  background.classList.add(`${e.target.innerText}`);
  yellow.classList.add("bold");
  if (yellowImg.classList.contains("opacity") === true) {
    yellowImg.classList.remove("opacity");
  } else {
    yellowImg.classList.add("opacity");
  }
};
const changeYellowColorBack = (e) => {
  background.classList.remove(`${e.target.innerText}`);
  yellow.classList.remove("bold");
  if (yellowImg.classList.contains("opacity") === true) {
    yellowImg.classList.remove("opacity");
  } else {
    yellowImg.classList.add("opacity");
  }
};

red.addEventListener("mouseover", changeRedColor);
red.addEventListener("mouseout", changeRedColorBack);
blue.addEventListener("mouseover", changeBlueColor);
blue.addEventListener("mouseout", changeBlueColorBack);
yellow.addEventListener("mouseover", changeYellowColor);
yellow.addEventListener("mouseout", changeYellowColorBack);

// 이미지를 미리 넣어두었다가, 오파시티를 조절하는 방식으로 접근한다.
// 폰트는 베리어블 폰트 적용되는 폰트로, 두께 조절이 자연스럽게 되는 것은 해보아야 알 수 있음.
// 글자 좌측에 화살표도 넣어두었다가, 스케일 조절하는 식으로 키울 수 있을 것
