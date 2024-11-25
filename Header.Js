 // Slideshow
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

 // Hamburger menu
 const hamburgerBtn = document.querySelector(".hamburger-btn");
 const headerElement = document.getElementById("header");

 hamburgerBtn.addEventListener("click", () => {
   hamburgerBtn.classList.toggle("active");
   if (hamburgerBtn.classList.contains("active")) {
     document.getElementById("burger-btn").style.transform = "translateX(-1200%)";
   } else {
     document.getElementById("burger-btn").style.transform = "translateX(0%)";
   }
 });