
// Open Modal and Fetch Changelog
document.querySelectorAll('.changelog-btn').forEach(button => {
    button.addEventListener('click', async function () {
        const url = this.dataset.url;
        openModal();
        await fetchChangelog(url);
    });
});

// Open modal
function openModal() {
    document.getElementById('changelogModal').style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('changelogModal').style.display = 'none';
    document.getElementById('changelogContent').innerHTML = 'Loading...';
}

// Fetch changelog content from GitHub
async function fetchChangelog(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch changelog.');
        }
        const data = await response.text();
        document.getElementById('changelogContent').innerText = data;
    } catch (error) {
        document.getElementById('changelogContent').innerText = 'Error fetching changelog!';
    }
}

// Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('changelogModal');
    if (event.target === modal) {
        closeModal();
    }
};