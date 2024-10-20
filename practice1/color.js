const red = document.querySelector(".red");
const background = document.querySelector(".background");

const colorChange = (e) => {
  console.log(e);
  red.classList.add("red-change");
};

red.addEventListener("mouseover", colorChange);
