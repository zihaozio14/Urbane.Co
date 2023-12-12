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