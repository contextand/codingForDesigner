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
