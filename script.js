let menu = document.getElementById("menu-btn");
let navbar = document.querySelector(".nav-list");
let header = document.querySelector("header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

ScrollReveal().reveal('.box-swap', {
    delay: 200,
    duration: 1000,
    origin: 'top',
    distance: '2rem',
    easing: 'ease-in-out', 
});

ScrollReveal().reveal('.image-swap', { 
    delay: 200,
    duration: 1500,
    scale: 0.85
});
