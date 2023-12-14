let active = document.getElementById("promotion");

document.getElementById("promo").addEventListener("click", () => {

  active.classList.toggle("toggle");
  active = document.getElementById("promotion");
  active.classList.toggle("toggle");

});

document.getElementById("new").addEventListener("click", () => {

  active.classList.toggle("toggle");
  active = document.getElementById("new-in");
  active.classList.toggle("toggle");

});

document.getElementById("ret").addEventListener("click", () => {

  active.classList.toggle("toggle");
  active = document.getElementById("retail");
  active.classList.toggle("toggle");

});