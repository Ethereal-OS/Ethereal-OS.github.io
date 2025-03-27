// Search Functionality
document.getElementById('searchInput').addEventListener('input', function () {
    const filterValue = this.value.toLowerCase().trim();
    const phoneCards = document.querySelectorAll('.phone-card_phone');
    const container = document.querySelector('.container_phone');
    let matchedCards = 0;

    // Loop through each card and check for matches
    phoneCards.forEach(card => {
        const deviceName = card.querySelector('.info-box p:nth-child(1)').innerText.toLowerCase();
        const codename = card.querySelector('.info-box p:nth-child(2)').innerText.toLowerCase();

        // Show or hide cards based on search match
        if (deviceName.includes(filterValue) || codename.includes(filterValue)) {
            card.style.display = 'inline-block';
            matchedCards++;
        } else {
            card.style.display = 'none';
        }
    });

    // Handle case where no results are found
    let noResultMsg = document.querySelector('.no-results-msg');
    if (matchedCards === 0) {
        if (!noResultMsg) {
            noResultMsg = document.createElement('p');
            noResultMsg.className = 'no-results-msg';
            noResultMsg.innerHTML = `
                                        No results found!<br>
                                        <span style="color: green;">Want ETHEREAL for your device? Ask your developers to build it!</span>
                                    `;
            noResultMsg.style.cssText = `
                text-align: center;
                color: #ff4d4d;
                width: 100%;
                margin-top: 20px;
                font-size: 18px;
            `;
            container.insertAdjacentElement('afterend', noResultMsg);
        }
        container.style.justifyContent = 'center'; // Center when no results
    } else {
        if (noResultMsg) {
            noResultMsg.remove();
        }
        container.style.justifyContent = matchedCards === 1 || matchedCards === 2 ? 'center' : 'flex-start'; // Center for 1 or 2 cards, left for more
        resetScroll(); // Reset scroll when new search
    }
});

// Reset Scroll when Search is Triggered
function resetScroll() {
    const container = document.querySelector('.container_phone');
    container.scrollTo({ left: 0, behavior: 'smooth' });

    // Check the number of visible cards after reset
    const visibleCards = Array.from(document.querySelectorAll('.phone-card_phone')).filter(card => card.style.display !== 'none');
    
    // Center if 1 or 2 cards are shown, otherwise justify to the left
    if (visibleCards.length === 1 || visibleCards.length === 2) {
        container.style.justifyContent = 'center';
    } else {
        container.style.justifyContent = 'flex-start';
    }
}