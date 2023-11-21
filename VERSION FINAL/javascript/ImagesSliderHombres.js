let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const interval = 3000; 

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`; 
    });
}


function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}


function startSlider() {
    showSlide(currentIndex);
    setInterval(nextSlide, interval);
}

startSlider();

