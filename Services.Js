document.addEventListener("DOMContentLoaded", function () {
  const cardSlider = document.querySelector(".card-slider");
  const cards = document.querySelectorAll(".card");
  const cardWidth = cards[0].offsetWidth;
  const totalCards = cards.length;
  let currentSlide = 0;
  // Remove the autoSlideInterval variable

  function slideToNext() {
    currentSlide = (currentSlide + 1) % totalCards;
    cardSlider.style.transition = "transform 0.5s ease";
    cardSlider.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
  }

  // Remove the startAutoSlide and stopAutoSlide functions

  // Remove the startAutoSlide() function call

  // Add event listeners for mouseover and mouseout on each card (if you still want these)
  // You can leave these event listeners if you want to pause the sliding when hovering over a card
  // cards.forEach((card) => {
  //   card.addEventListener("mouseover", stopAutoSlide);
  //   card.addEventListener("mouseout", startAutoSlide);
  // });
});
