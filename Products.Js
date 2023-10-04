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
    event.preventDefault();
    if (event.deltaY > 0) {
      slideToNext();
    } else if (event.deltaY < 0) {
      slideToPrevious();
    }
  });

  const leftButton = document.querySelector(".Left_Product_Button");
  const rightButton = document.querySelector(".Right_Product_Button");

  leftButton.addEventListener("click", () => {
    slideToPrevious();
  });

  rightButton.addEventListener("click", () => {
    slideToNext();
  });

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      toggleCardContent(index);
      expandCard(index);
      toggleCardContent(index);
    });
  });

  // Function to expand a card
  function expandCard(index) {
    const card = cards[index];
    const cardClone = card.cloneNode(true);
    cardClone.classList.add("expanded-card");
    const overlay = document.createElement("div");
    overlay.classList.add("expanded-card-overlay");
    overlay.appendChild(cardClone);
    document.body.appendChild(overlay);

    // Add a click event listener to close the expanded card
    overlay.addEventListener("click", () => {
      document.body.removeChild(overlay);
    });
  }

  // Function to toggle card content
  function toggleCardContent(index) {
    const card = cards[index];
    const nonExpandedContent = card.querySelector(".Non-Expanded");
    const expandedContent = card.querySelector(".Expanded");

    if (nonExpandedContent.style.display === "none") {
      // If Non-Expanded content is hidden, show it and hide Expanded content
      nonExpandedContent.style.display = "block";
      expandedContent.style.display = "none";
    } else {
      // If Non-Expanded content is visible, hide it and show Expanded content
      nonExpandedContent.style.display = "none";
      expandedContent.style.display = "block  ";
    }
  }
});
