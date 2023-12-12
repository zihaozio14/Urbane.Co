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