document.addEventListener("DOMContentLoaded", function () {
    const cardSlider = document.querySelector(".card-slider");
    const cards = document.querySelectorAll(".card");
    const cardWidth = cards[0].offsetWidth;
    const totalCards = cards.length;
    let currentSlide = 0;
    let autoSlideInterval;
  
    function slideToNext() {
      currentSlide = (currentSlide + 1) % totalCards;
      cardSlider.style.transition = "transform 0.5s ease";
      cardSlider.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
    }
  
    function startAutoSlide() {
      autoSlideInterval = setInterval(slideToNext, 5000); // Slide to next card every 5 seconds
    }
  
    function stopAutoSlide() {
      clearInterval(autoSlideInterval); // Stop the automatic sliding
    }
  
    startAutoSlide(); // Start automatic sliding initially
  
    // Add event listeners for mouseover and mouseout on each card
    cards.forEach((card) => {
      card.addEventListener("mouseover", stopAutoSlide);
      card.addEventListener("mouseout", startAutoSlide);
    });
  });
  