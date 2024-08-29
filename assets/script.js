const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");

let currentSlide = 0;

function createDots() {
  dotsContainer.innerHTML = '';
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === currentSlide) {
      dot.classList.add('dot_selected');
    }
    dotsContainer.appendChild(dot);
  }
}

function updateCarousel() {
  // Update de la bannière et du texte
  bannerImg.src = "./assets/images/slideshow/" + slides[currentSlide].image;
  bannerText.innerHTML = slides[currentSlide].tagLine;

  // Update des points
  const dots = document.querySelectorAll(".dot");
  dots.forEach(function (dot, index) {
    dot.classList.toggle("dot_selected", index === currentSlide);
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  updateCarousel();
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  updateCarousel();
}

// Gestion des flèches
arrowLeft.addEventListener("click", () => {
  console.log("Left arrow clicked");
  prevSlide();
});

arrowRight.addEventListener("click", () => {
  console.log("Right arrow clicked");
  nextSlide();
});

// Initialisation du carrousel
createDots();
updateCarousel();
