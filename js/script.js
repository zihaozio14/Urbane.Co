document.querySelector("#menu-btn").addEventListener("click", () => {

  document.querySelector('.hamburger').classList.toggle("show");
  document.querySelector(".overlay").classList.toggle("show");
  
});

document.querySelector(".overlay").addEventListener("click", () => {

  document.querySelector('.hamburger').classList.toggle("show");
  document.querySelector(".overlay").classList.toggle("show");
  
});

let i = 0;
let curr = document.getElementById("slide"+(i+1));
curr.classList.toggle("fade");

setInterval(() => {
  
  curr.classList.toggle("fade");
  i = (i+1)%3;
  curr = document.getElementById("slide"+(i+1));
  curr.classList.toggle("fade");
  
}, 3000);