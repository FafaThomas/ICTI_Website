document.addEventListener("DOMContentLoaded", function () {
  const cardSlider = document.querySelector(".card-slider");
  const cards = document.querySelectorAll(".card");
  const cardWidth = cards[0].offsetWidth;
  const totalCards = cards.length;
  let currentSlide = 0;

  function slideToNext() {
    currentSlide = (currentSlide + 1) % totalCards;
    cardSlider.style.transition = "transform 0.5s ease";
    cardSlider.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
  }

  function slideToPrevious() {
    currentSlide = (currentSlide - 1 + totalCards) % totalCards;
    cardSlider.style.transition = "transform 0.5s ease";
    cardSlider.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
  }

  cardSlider.addEventListener("wheel", (event) => {
    event.preventDefault(); // Prevent the default scrolling behavior
    if (event.deltaY > 0) {
      // Scrolling down, move to the next card
      slideToNext();
    } else if (event.deltaY < 0) {
      // Scrolling up, move to the previous card
      slideToPrevious();
    }
  });

  // Add event listeners for mouseover and mouseout on each card (if you still want these)
  cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      cardSlider.removeEventListener("wheel");
    });
    card.addEventListener("mouseout", () => {
      cardSlider.addEventListener("wheel", (event) => {
        event.preventDefault(); // Prevent the default scrolling behavior
        if (event.deltaY > 0) {
          // Scrolling down, move to the next card
          slideToNext();
        } else if (event.deltaY < 0) {
          // Scrolling up, move to the previous card
          slideToPrevious();
        }
      });
    });
  });
});
