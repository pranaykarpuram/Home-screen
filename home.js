let slideIndex = 1;
showSlides(slideIndex);
//alert(slides.length)

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  //alert(slides.length)
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    //alert(`${i} is being faded`)  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    //alert(`${i} is beig made active`)
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}