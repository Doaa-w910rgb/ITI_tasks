let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/* Adding button*/
// Get all product items
const productItems = document.querySelectorAll(".product-item");

// get the add to cart button and cart count element
const addToCartBtn = document.getElementById("add-to-cart-btn");
const cartCount = document.getElementById("cart-count");

// set initial cart count to 0
let count = 0;

// add event listener to the add to cart button
addToCartBtn.addEventListener("click", function () {
  // increment the cart count
  count++;

  // update the cart count element
  cartCount.innerText = count;
});
