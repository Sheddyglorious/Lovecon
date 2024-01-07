function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  
  hamburger.classList.toggle('change');
  menu.classList.toggle('active');
  // Add your code to toggle the menu or perform any other action
}

//Top pioneers
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

// Auto slide change every 5 seconds
setInterval(function () {
  plusSlides(1);
}, 5000);


//footer
function changeText(element) {
  // Reset all items to symbols
  document.querySelectorAll('.footer-item').forEach(item => {
    item.classList.remove('active');
  });

  // Toggle the clicked item between symbol and text
  element.classList.toggle('active');
}

