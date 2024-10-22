const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");
const background = document.querySelector(".background");

const changeRed = (e) => {
  background.classList.add("orangered");
  red.classList.add("bold");
};
const changeRedOut = (e) => {
  background.classList.remove("orangered");
  red.classList.remove("bold");
};
const changeBlue = (e) => {
  background.classList.add("dodgerblue");
  blue.classList.add("bold");
};
const changeBlueOut = (e) => {
  background.classList.remove("dodgerblue");
  blue.classList.remove("bold");
};
const changeYellow = (e) => {
  background.classList.add("greenyellow");
  yellow.classList.add("bold");
};
const changeYellowOut = (e) => {
  background.classList.remove("greenyellow");
  yellow.classList.remove("bold");
};

red.addEventListener("mouseover", changeRed);
red.addEventListener("mouseout", changeRedOut);
blue.addEventListener("mouseover", changeBlue);
blue.addEventListener("mouseout", changeBlueOut);
yellow.addEventListener("mouseover", changeYellow);
yellow.addEventListener("mouseout", changeYellowOut);
