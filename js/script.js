/*---------------------------------------------------------------------------------------------------------------------------*/
/*                                                     GMRZ Scripts                                                          */
/*---------------------------------------------------------------------------------------------------------------------------*/

// Pics
let pics = document.querySelectorAll('.product');
let picsSrc = [
    './img/img1.jpg',
    './img/img2.jpg',
    './img/img3.jpg',
    './img/img4.jpg',
    './img/img5.jpg',
    './img/img6.jpg'
]
for (i = 0; i < pics.length; i++) {
    pics[i].style.backgroundImage = "url('" + picsSrc[i] + "')";
}

// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
    document.querySelector('body').style.overflowY = 'hidden';
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.querySelector('body').style.overflowY = 'visible';
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}