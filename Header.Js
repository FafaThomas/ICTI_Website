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
  if (mobileburgerBtn.classList.contains("active")){
    mobileburgerBtn.classList.toggle("active");
  }
    if (hamburgerBtn.classList.contains("active")) {
      document.getElementById("burger-btn").style.transform = "translateX(0%)";
    } else {  
      document.getElementById("burger-btn").style.transform = "translateX(1200%)";
    }
  
});

const mobileburgerBtn = document.querySelector(".mobileburger-btn");
const headerElement = document.getElementById('header');

mobileburgerBtn.addEventListener("click", () => {
  mobileburgerBtn.classList.toggle("active");
  if (mobileburgerBtn.classList.contains("active")) {
    let currentHeight = headerElement.clientHeight;
    let newHeight = currentHeight + 60;
    headerElement.style.height = `${newHeight}px`;
    document.getElementById("mhero").style.transform = "translateY(-20%)";
  } else {  
    let currentHeight = headerElement.clientHeight;
    let newHeight = currentHeight - 60;
    headerElement.style.height = `${newHeight}px`;
    document.getElementById("mhero").style.transform = "translateY(-120%)";
  }
});

if (window.innerWidth <= 768 && mobileburgerBtn.classList.contains("active")){
  let currentHeight = headerElement.clientHeight;
    let newHeight = currentHeight - 60;
    headerElement.style.height = `${newHeight}px`;
    document.getElementById("mhero").style.transform = "translateY(-120%)";
}

document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".dhero h2");
  setTimeout(() => {
      hero.style.opacity = 1;
      hero.style.transform = "translateY(0)";
  }, 500); // Adjust the delay (in milliseconds) to control when the animation starts
});

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".dbtn");
  setTimeout(() => {
    if (window.innerWidth > 768){
      btn.style.opacity = 1;
      btn.style.transform = "translateY(0)";
    }else{
      btn.style.opacity = 0;
      btn.style.transform = "translateY(30px)";
    }
    
  }, 750); // Adjust the delay (in milliseconds) to control when the animation starts
});



