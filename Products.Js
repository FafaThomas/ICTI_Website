document.addEventListener("DOMContentLoaded", function () {
  const cardSlider = document.querySelector(".card-slider");
  const cards = document.querySelectorAll(".card");
  const cardWidth = cards[0].offsetWidth;
  const totalCards = cards.length;
  let currentSlide = 0;
  let touchStartX = 0;
  let touchEndX = 0;

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
    let factor = 0.7; // Default factor value

    if (window.innerWidth <= 1024) {
      factor = 0.8;
    } else if (window.innerWidth >= 1200) {
      factor = 0.65;
    }

    const translateX = Math.min(
      0,
      Math.max(maxTranslateX, -currentSlide * cardWidth * factor)
    );
    cardSlider.style.transition = "transform 0.5s ease";
    cardSlider.style.transform = `translateX(${translateX}px)`;
  }





  

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

  function expandCard(index) {
    const card = cards[index];
    const cardClone = card.cloneNode(true);
    cardClone.classList.add("expanded-card");
    const overlay = document.createElement("div");
    overlay.classList.add("expanded-card-overlay");
    overlay.appendChild(cardClone);
  
    // Append a back button to the overlay
    const backButton = document.createElement("img");
    backButton.src = "Images/Product Section/BackBtn.png";
    backButton.alt = "back";
    backButton.className = "ExBackLogo";
    overlay.appendChild(backButton);
  
    document.body.appendChild(overlay);
  
  
    // Show the popup when clicking on the overlay or back button
    overlay.addEventListener("click", (event) => {
      const className = event.target.className;
      const targetElement = document.getElementById('contact');
      if (className == "ExBackLogo"){
        document.body.removeChild(overlay);
        
      }else if (className == "ProdCardOpacityGray" || className == "ProdInqBtn"){
        targetElement.scrollIntoView({ behavior: 'smooth' });
        document.body.removeChild(overlay);
      }
      
    });
  }
  
  
  

  function toggleCardContent(index) {
    const card = cards[index];
    const nonExpandedContent = card.querySelector(".Non-Expanded");
    const expandedContent = card.querySelector(".Expanded");

    if (nonExpandedContent.style.display === "none") {
      nonExpandedContent.style.display = "block";
      expandedContent.style.display = "none";
    } else {
      nonExpandedContent.style.display = "none";
      expandedContent.style.display = "block";
    }
  }

  // Add touch event listeners to enable touch screen scrolling
  cardSlider.addEventListener("touchstart", (event) => {
    touchStartX = event.touches[0].clientX;
  });

  cardSlider.addEventListener("touchmove", (event) => {
    touchEndX = event.touches[0].clientX;
  });

  cardSlider.addEventListener("touchend", () => {
    const touchDiff = touchStartX - touchEndX;
    if (touchDiff > 0) {
      // Swiped left (next slide)
      slideToNext();
    } else if (touchDiff < 0) {
      // Swiped right (previous slide)
      slideToPrevious();
    }
  });
});
