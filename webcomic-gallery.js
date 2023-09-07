let currentPoster = 1;  // Starting with Poster1.png
const totalPosters = 9; // Total number of posters

// Function to update the current poster
function updatePoster() {
    document.getElementById("currentPoster").src = `Poster${currentPoster}.png`;
    document.getElementById("currentPoster").alt = `Poster ${currentPoster}`;
    checkButtons();
}

// Function to enable or disable buttons based on current poster
function checkButtons() {
    document.getElementById("prevButton").disabled = currentPoster <= 1;
    document.getElementById("nextButton").disabled = currentPoster >= totalPosters;
}

// Event listeners for the "next" and "previous" image areas and buttons
document.getElementById("nextImage").addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPoster < totalPosters) {
        currentPoster++;
        updatePoster();
    }
});

document.getElementById("prevImage").addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPoster > 1) {
        currentPoster--;
        updatePoster();
    }
});

document.getElementById("nextButton").addEventListener("click", () => {
    if (currentPoster < totalPosters) {
        currentPoster++;
        updatePoster();
    }
});

document.getElementById("prevButton").addEventListener("click", () => {
    if (currentPoster > 1) {
        currentPoster--;
        updatePoster();
    }
});

// Initialize gallery on page load
window.addEventListener("DOMContentLoaded", () => {
    checkButtons();
});
