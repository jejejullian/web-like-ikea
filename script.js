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

// javascript review box
const reviews = [
  {
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quod soluta et beatae dignissimos magni? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio officiis hic ratione incidunt, tenetur eaque.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi inventore doloribus voluptates aliquid iure totam, ea amet. Aliquam, consectetur perferendis!",
    image: "images/box-image1.jpeg",
    nama: "shiva",
    job: "Pejabat",
  },
  {
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quod soluta et beatae dignissimos magni? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio officiis hic ratione incidunt, tenetur eaque.Lorem ipsum dolor sit",
    image: "images/box-image1.jpeg",
    nama: "susilanto",
    job: "Tiktokers",
  },
  {
    text: "orem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio officiis hic ratione incidunt, tenetur eaque.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi inventore doloribus voluptates aliquid iure totam, ea amet.",
    image: "images/box-image1.jpeg",
    nama: "kevin",
    job: "Affliator",
  },
  {
    text: "amet consectetur adipisicing elit. Distinctio officiis hic ratione incidunt, tenetur eaque.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi inventore doloribus voluptates aliquid iure totam, ea amet. Aliquam, consectetur perferendis!",
    image: "images/box-image1.jpeg",
    nama: "Guntur",
    job: "Pemuda Tersesat",
  },
];

const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const textElement = document.getElementById("text-element");
const imageElement = document.getElementById("image-element");
const nameElement = document.getElementById("name-element");
const jobElement = document.getElementById("job");

let currentIndex = 0;

function displayReview(index) {
  const review = reviews[index];
  textElement.textContent = review.text;
  imageElement.src = review.image;
  nameElement.textContent = review.nama;
  jobElement.innerText = review.job;
}

btnRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    displayReview(currentIndex);
});

btnLeft.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    displayReview(currentIndex);
});

document.addEventListener("DOMContentLoaded", () => {
  displayReview(currentIndex);
});


// end

ScrollReveal().reveal(".box-swap", {
  delay: 200,
  duration: 1000,
  origin: "top",
  distance: "2rem",
  easing: "ease-in-out",
});

ScrollReveal().reveal(".image-swap", {
  delay: 200,
  duration: 1500,
  scale: 0.85,
});
