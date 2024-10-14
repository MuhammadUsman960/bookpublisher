let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function moveSlide(direction) {
    const cardsPerView = 3;
    const maxSlide = totalSlides - cardsPerView; // Maximum slide index
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = maxSlide;
    } else if (currentSlide > maxSlide) {
        currentSlide = 0;
    }

    const slideWidth = document.querySelector('.slide').clientWidth;
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Auto-slide every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);
