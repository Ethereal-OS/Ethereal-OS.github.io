const words = ["Functionality!", "Innovation!", "Style!", "Perfection!", "Simplicity!"];
let previousWordIndex = -1;
let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;
const speed = 100;
const delay = 1000;
const textElement = document.querySelector(".dynamic-text");

function getNextWordIndex() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * words.length);
    } while (newIndex === previousWordIndex); // Prevent repeating the same word
    previousWordIndex = newIndex;
    return newIndex;
}

function typeEffect() {
    if (!isDeleting && letterIndex < words[wordIndex].length) {
        currentWord += words[wordIndex][letterIndex];
        letterIndex++;
    } else if (isDeleting && letterIndex > 0) {
        currentWord = currentWord.slice(0, -1);
        letterIndex--;
    }

    textElement.innerHTML = currentWord;

    if (!isDeleting && letterIndex === words[wordIndex].length) {
        setTimeout(() => isDeleting = true, delay);
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = getNextWordIndex();
    }

    setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

typeEffect();
