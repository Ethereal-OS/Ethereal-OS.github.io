let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function changeSlide(index) {
    slides[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');

    currentIndex = index;

    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

function nextSlide() {
    let newIndex = (currentIndex + 1) % slides.length;
    changeSlide(newIndex);
}

// Auto-rotate every 3 seconds
setInterval(nextSlide, 3000);