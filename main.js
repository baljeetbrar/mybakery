const carousel = document.querySelector('.carousel');
const slides = carousel.getElementsByClassName('slide');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');

let currentIndex = 0;

function showSlide(index) {
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  // Display the slide at the given index
  slides[index].style.display = 'block';
}

function goToNextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function goToPrevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
}

// Show initial slide
showSlide(currentIndex);

// Add event listeners to buttons
nextButton.addEventListener('click', goToNextSlide);
prevButton.addEventListener('click', goToPrevSlide);
