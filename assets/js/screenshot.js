let currentIndex = 0;
const totalSlides = document.querySelectorAll(".slide").length;
const slider = document.querySelector(".slider");
const dots = document.querySelectorAll(".dot");

function changeSlide(index) {
    currentIndex = index;
    let angle = -currentIndex * 90; // Rotate cube
    slider.style.transform = `rotateY(${angle}deg)`;

    // Update dot indicators
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

// Add event listeners to dots
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => changeSlide(index));
});

// Auto-rotate every 3 seconds
setInterval(() => {
    let newIndex = (currentIndex + 1) % totalSlides;
    changeSlide(newIndex);
}, 3000);