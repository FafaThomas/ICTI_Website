document.addEventListener("DOMContentLoaded", function () {
  const cardSlider = document.querySelector(".card-slider");
  const cards = document.querySelectorAll(".card");
  const cardWidth = cards[0].offsetWidth;
  const totalCards = cards.length;
  let currentSlide = 0;

  function slideToNext() {
    if (currentSlide < totalCards - 1) {
      currentSlide++;
      slideTo(currentSlide);
    }
  }

  function slideToPrevious() {
    if (currentSlide > 0) {
      currentSlide--;
      slideTo(currentSlide);
    }
  }

  function slideTo(index) {
    currentSlide = index;
    const maxTranslateX = -(totalCards - 1) * cardWidth;
    const translateX = Math.min(0, Math.max(maxTranslateX, -currentSlide * cardWidth * 0.7));
    cardSlider.style.transition = "transform 0.5s ease";
    cardSlider.style.transform = `translateX(${translateX}px)`;
  }

  cardSlider.addEventListener("wheel", (event) => {
    event.preventDefault(); // Prevent the default scrolling behavior
    if (event.deltaY > 0) {
      // Scrolling down, move to the next card (to the right)
      slideToNext();
    } else if (event.deltaY < 0) {
      // Scrolling up, move to the previous card (to the left)
      slideToPrevious();
    }
  });

  const leftButton = document.querySelector(".Left_Service_Button");
  const rightButton = document.querySelector(".Right_Service_Button");

  leftButton.addEventListener("click", () => {
    slideToPrevious();
  });

  rightButton.addEventListener("click", () => {
    slideToNext();
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
          // Scrolling down, move to the next card (to the right)
          slideToNext();
        } else if (event.deltaY < 0) {
          // Scrolling up, move to the previous card (to the left)
          slideToPrevious();
        }
      });
    });
  });
});
