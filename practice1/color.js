const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");
const background = document.querySelector(".background");

const changeRed = (e) => {
  // console.log(e.target.innerText);
  background.classList.add("orangered", "bold");
};
const changeBlue = (e) => {
  // console.log(e.target.innerText);
  background.classList.add("dodgerblue");
};
const changeYellow = (e) => {
  // console.log(e.target.innerText);
  background.classList.add("greenyellow");
};

red.addEventListener("mouseover", changeRed);
blue.addEventListener("mouseover", changeBlue);
yellow.addEventListener("mouseover", changeYellow);
