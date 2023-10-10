document.addEventListener('DOMContentLoaded', function () {
  // Get all elements with the class "InqBtn"
  const buttons = document.querySelectorAll('.InqBtn');

  // Get the target element by its id ("#contact" in this case)
  const targetElement = document.getElementById('contact');

  // Loop through each button and add a click event listener
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Use the scrollIntoView method with smooth behavior
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
});
