document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const navbar = document.querySelector(".navbar");

  // Initial header height
  let headerHeight = header.clientHeight;

  // Function to scroll to a section by its ID with an additional offset
  function scrollToSectionWithOffset(sectionId, offset) {
    const section = document.querySelector(sectionId);
    window.scrollTo({
      top: section.offsetTop + offset,
      behavior: "smooth",
    });
  }

  // Add an event listener for scroll events
  window.addEventListener("scroll", () => {
    // Check the scroll position
    if (window.scrollY > navbar.clientHeight + 150) {
      // Set the smaller header height
      header.style.height = `${navbar.clientHeight + 30}px`;
    } else {
      // Restore the original header height
      header.style.height = `${headerHeight}px`;
    }
  });

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

  // Hero section animation
  const dhero = document.querySelector(".dhero");
  const h2 = dhero.querySelector("h2");
  const p = dhero.querySelector("p");

  setTimeout(() => {
    h2.style.opacity = 1;
    h2.style.transform = "translateY(0)";
    p.style.opacity = 1;
    p.style.transform = "translateY(0)";
  }, 500); // Adjust the delay (in milliseconds) to control when the animation starts

  // Button animation
  const btn = document.querySelector(".dbtn");
  setTimeout(() => {
    if (window.innerWidth > 768) {
      btn.style.opacity = 1;
      btn.style.transform = "translateY(0)";
    } else {
      btn.style.opacity = 0;
      btn.style.transform = "translateY(30px)";
    }
  }, 750); // Adjust the delay (in milliseconds) to control when the animation starts

  const dbtn = document.querySelector(".dbtn");
  dbtn.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1); // Get the target section ID

    scrollToSectionWithOffset(`#${targetId}`, 0);
  });

  const logo = document.querySelector(".CompanyLogo");

  let isMouseDown = false;

  logo.addEventListener("mousedown", () => {
    isMouseDown = true;
    logo.classList.add('shrink');
  });

  document.addEventListener("mouseup", () => {
    if (isMouseDown) {
      logo.classList.remove('shrink');
      isMouseDown = false;
    }
  });

  logo.addEventListener("click", function (e) {
    e.preventDefault();

    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth" // This makes the scroll smooth
    });
  });

  // Hamburger menu
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const mobileburgerBtn = document.querySelector(".mobileburger-btn");
  const headerElement = document.getElementById("header");

  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    if (mobileburgerBtn.classList.contains("active")) {
      mobileburgerBtn.classList.toggle("active");
    }
    if (hamburgerBtn.classList.contains("active")) {
      document.getElementById("burger-btn").style.transform = "translateX(0%)";
    } else {
      document.getElementById("burger-btn").style.transform = "translateX(1200%)";
    }
  });

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

  if (window.innerWidth <= 768 && mobileburgerBtn.classList.contains("active")) {
    let currentHeight = headerElement.clientHeight;
    let newHeight = currentHeight - 60;
    headerElement.style.height = `${newHeight}px`;
    document.getElementById("mhero").style.transform = "translateY(-120%)";
  }

  // Add the smooth transition class to the header when it becomes fixed
  headerElement.classList.add("smooth-transition");

  // Remove the smooth transition class when the header is reset to its default position
  setTimeout(() => {
    headerElement.classList.remove("smooth-transition");
  }, 10);

  // Smooth scrolling for navigation links with custom offsets
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1); // Get the target section ID
      let offset = 0; // Default offset

      // Use a switch-case statement to set different offsets for specific sections
      switch (targetId) {
        case "products":
          offset = -20; // Set the offset for the #products section
          break;
        // Add more cases for other sections with custom offsets if needed
        default:
          offset = 0; // Default offset for other sections
          break;
      }

      scrollToSectionWithOffset(`#${targetId}`, offset);
    });
  });

});
