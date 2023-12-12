document.querySelector("#menu-btn").addEventListener("click", () => {

  document.querySelector('.hamburger').classList.toggle("show");
  document.querySelector(".overlay").classList.toggle("show");
  
});

document.querySelector(".overlay").addEventListener("click", () => {

  document.querySelector('.hamburger').classList.toggle("show");
  document.querySelector(".overlay").classList.toggle("show");
  
});

let i = 0;
let slide = document.getElementById("slide"+(i+1));
let curr = document.querySelector("#indicator > span:nth-child("+(i+1)+")");
slide.classList.toggle("fade");
curr.classList.toggle("active");

setInterval(() => {
  
  slide.classList.toggle("fade");
  curr.classList.toggle("active");
  i = (i+1)%3;
  slide = document.getElementById("slide"+(i+1));
  curr = document.querySelector("#indicator > span:nth-child("+(i+1)+")");
  slide.classList.toggle("fade");
  curr.classList.toggle("active");
  
}, 3000);


let active = document.getElementById("promotion");

document.getElementById("promotion").addEventListener("click", () => {

  active.classList.toggle("toggle");
  active = document.getElementById("promotion");
  active.classList.toggle("toggle");

})

document.getElementById("new-in").addEventListener("click", () => {

  active.classList.toggle("toggle");
  active = document.getElementById("new-in");
  active.classList.toggle("toggle");

})

document.getElementById("retail").addEventListener("click", () => {

  active.classList.toggle("toggle");
  active = document.getElementById("retail");
  active.classList.toggle("toggle");

})