let active = document.getElementById("promotion");
let select = document.getElementById("promo");

document.getElementById("promo").addEventListener("click", () => {

  active.classList.toggle("toggle");
  select.classList.toggle("toggle");
  active = document.getElementById("promotion");
  select = document.getElementById("promo");
  active.classList.toggle("toggle");
  select.classList.toggle("toggle");

});

document.getElementById("new").addEventListener("click", () => {

  active.classList.toggle("toggle");
  select.classList.toggle("toggle");
  active = document.getElementById("new-in");
  select = document.getElementById("new");
  active.classList.toggle("toggle");
  select.classList.toggle("toggle");

});

document.getElementById("ret").addEventListener("click", () => {

  active.classList.toggle("toggle");
  select.classList.toggle("toggle");
  active = document.getElementById("retail");
  select = document.getElementById("ret");
  active.classList.toggle("toggle");
  select.classList.toggle("toggle");

});