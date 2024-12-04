let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carrossel-slide img');
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    
    const offset = -currentSlide * 100;
    document.querySelector('.carrossel-slide').style.transform = `translateX(${offset}%)`;
}
