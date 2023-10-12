document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".bubble-slider");
    const bubbles = slider.querySelectorAll(".Bubble");

    let currentIndex = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 120}px)`;
        bubbles.forEach((bubble, index) => {
            bubble.classList.remove("active");
            if (index === currentIndex) {
                bubble.classList.add("active");
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % bubbles.length;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + bubbles.length) % bubbles.length;
        updateSlider();
    }

    const swipeThreshold = 50;
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });

    slider.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].clientX;

        if (touchStartX - touchEndX > swipeThreshold) {
            nextSlide();
        } else if (touchEndX - touchStartX > swipeThreshold) {
            prevSlide();
        }
    });

    // Start the automatic sliding
    const autoSlideInterval = setInterval(nextSlide, 3000);

    // Loop the slider seamlessly
    slider.addEventListener("transitionend", () => {
        if (currentIndex === 0) {
            slider.style.transition = "none";
            currentIndex = bubbles.length;
            slider.style.transform = `translateX(-${currentIndex * 120}px)`;
            setTimeout(() => {
                slider.style.transition = "transform 1s ease";
            });
        }
    });

    // Initialize the slider
    updateSlider();
});
