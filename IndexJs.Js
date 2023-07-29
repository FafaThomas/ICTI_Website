document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".banner-img");
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.style.opacity = i === index ? 1 : 0;
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  setInterval(nextImage, 5000); // Change image every 5 seconds
});

const hamburgerBtn = document.querySelector(".hamburger-btn");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".hero h2");
  setTimeout(() => {
    hero.style.opacity = 1;
    hero.style.transform = "translateY(0)";
  }, 500); // Adjust the delay (in milliseconds) to control when the animation starts
});

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".btn");
  setTimeout(() => {
    btn.style.opacity = 1;
    btn.style.transform = "translateY(0)";
  }, 750); // Adjust the delay (in milliseconds) to control when the animation starts
});

