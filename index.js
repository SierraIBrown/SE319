//Carousel JS code
let slideIndex = 0;
function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item');
  const captions = document.querySelectorAll('.carousel-caption');
  if(index >= slides.length){
    slideIndex = 0;
  }
  else if(index < 0){
    slideIndex = slides.length - 1;
  }
  else{
    slideIndex = index;
  }
  slides.forEach(slide => slide.style.display = 'none');
  slides[slideIndex].style.display = 'block';
  captions.forEach(caption => caption.style.display = 'none');
  captions[slideIndex].style.display = 'block';
}
function nextSlide() {
  showSlide(slideIndex + 1);
}
function prevSlide() {
  showSlide(slideIndex - 1);
}
showSlide(slideIndex);