document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const navbar = document.querySelector(".navbar");
  const CompanyLogo = document.querySelector(".CompanyLogo");
  const Hero = document.querySelector(".dhero");
  const Burger = document.querySelector(".hamburger-btn");
  const Menu = document.querySelector(".menu-container");
  const navcontainer = document.querySelector(".nav-container");
  // Initial header height
  let headerHeight = header.offsetHeight;

  // Set the initial header height
  header.style.height = `${headerHeight}px`;

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
    if (window.scrollY > navbar.clientHeight) {
      // Set the smaller header height
      if (window.innerWidth > 480){
        header.style.height = `${navbar.clientHeight}px`;
        CompanyLogo.style.setProperty('width', '250px', 'important');
        CompanyLogo.style.setProperty('padding-top', '7px');
        navcontainer.style.setProperty('padding-top', '0px');
      }else{
        header.style.height = `${navbar.clientHeight + 50}px`;
        CompanyLogo.style.setProperty('width', '200px', 'important');
        CompanyLogo.style.setProperty('padding-top', '100px');
        navcontainer.style.setProperty('padding-top', '0px');
      }
      
      Hero.style.margin = '0 5%';
      Burger.style.margin = '0% 0%';
      Menu.style.margin = '0% 0%';
    } else {
      // Restore the original header height
      header.style.height = `${headerHeight}px`;
      if (window.innerWidth > 1024) {
        CompanyLogo.style.setProperty('width', '600px', 'important');
        CompanyLogo.style.setProperty('padding-top', '100px');
      } else if (window.innerWidth <= 1024 && window.innerWidth > 800) {
        CompanyLogo.style.setProperty('width', '500px', 'important');
        CompanyLogo.style.setProperty('padding-top', '100px');
      } else if (window.innerWidth <= 800 && window.innerWidth > 480) {
        CompanyLogo.style.setProperty('width', '300px', 'important');
        CompanyLogo.style.setProperty('padding-top', '100px');
      } else {
        CompanyLogo.style.setProperty('width', '300px', 'important');
        CompanyLogo.style.setProperty('padding-top', '150px');
      }
      
      Hero.style.margin = '0 5%';
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
      btn.style.opacity = 1;
      btn.style.transform = "translateY(0)";
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
  const headerElement = document.getElementById("header");

  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    if (hamburgerBtn.classList.contains("active")) {
      document.getElementById("burger-btn").style.transform = "translateX(0%)";
    } else {
      document.getElementById("burger-btn").style.transform = "translateX(1200%)";
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

  // Add an event listener to the image element
  document.getElementById('scrollToProducts').addEventListener('click', function() {
    // Smooth scroll to the #products section
    document.querySelector('#products').scrollIntoView({
      behavior: 'smooth'
    });
    
    // Shrink the image after clicking (optional)
    this.style.transform = 'scale(0.9)';
  });
});
