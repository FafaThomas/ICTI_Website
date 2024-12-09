 // Hamburger menu
 const hamburgerBtn = document.querySelector(".hamburger-btn");
 const navContainer = document.querySelector('.nav-container');
 const menuContainer = document.querySelector('.menu-container');
 const headerElement = document.getElementById("header");

 hamburgerBtn.addEventListener("click", () => {
   hamburgerBtn.classList.toggle("active");
   if (hamburgerBtn.classList.contains("active")) {
     navContainer.style.transform = 'translateX(0%)';
     menuContainer.style.opacity = '1';
   } else {
    navContainer.style.transform = 'translateX(80%)';
    menuContainer.style.opacity = '0';
   }
 });

  // CompanyLogo Click
  const CompanyLogo = document.querySelector(".CompanyLogo");

  CompanyLogo.addEventListener("click", ()=> {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });