document.querySelector("#menu-btn").addEventListener("click", () => {

  document.querySelector('.hamburger').classList.toggle("show");
  document.querySelector(".overlay").classList.toggle("show");
  
});

document.querySelector(".overlay").addEventListener("click", () => {

  document.querySelector('.hamburger').classList.toggle("show");
  document.querySelector(".overlay").classList.toggle("show");
  
});