// here are the javascript codes for the image slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll('.slide');
  let titles = document.querySelectorAll('.slide-title');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    titles[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  titles[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
// the image slider ends here, below is the code for window onload popup update

// Function to close the popup
function closePopup() {
  document.getElementById('popupContainer').style.display = 'none';
}

// Show the popup when the page is loaded
window.onload = function () {
  document.getElementById('popupContainer').style.display = 'block';
};
