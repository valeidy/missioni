let currentIndexMujer = 0;
const slidesMujer = document.querySelectorAll('.slide-mujer');
const intervalMujer = 3000;

function showSlideMujer(index) {
    slidesMujer.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function nextSlideMujer() {
    currentIndexMujer = (currentIndexMujer + 1) % slidesMujer.length;
    showSlideMujer(currentIndexMujer);
}

function prevSlideMujer() {
    currentIndexMujer = (currentIndexMujer - 1 + slidesMujer.length) % slidesMujer.length;
    showSlideMujer(currentIndexMujer);
}

function startSliderMujer() {
    showSlideMujer(currentIndexMujer);
    setInterval(nextSlideMujer, intervalMujer);
}

startSliderMujer();
