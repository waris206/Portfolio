// Get menu icon and dropdown menu
const menuIcon = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

// Add click event to toggle dropdown menu
menuIcon.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});



// Dark mode toggle with persistence
const darkModeToggle = document.getElementById('dark-mode-toggle');
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

if (isDarkMode) {
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.remove('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const darkModeState = document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled';
    localStorage.setItem('darkMode', darkModeState);
});

// Project modal for "Read More"
document.querySelectorAll('.read-more-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        const details = btn.nextElementSibling; // Get the details modal
        details.style.display = 'block'; // Show the modal
        details.style.opacity = '0'; // Start with opacity 0
        details.style.transition = 'opacity 0.3s ease'; // Add a smooth transition
        setTimeout(() => {
            details.style.opacity = '1'; // Fade in the modal
        }, 10);
        btn.style.display = 'none'; // Hide the "Read More" button
    });
});

// Close project details modal
document.querySelectorAll('.close-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        const details = btn.parentElement; // Get the modal container
        details.style.opacity = '0'; // Fade out the modal
        setTimeout(() => {
            details.style.display = 'none'; // Hide the modal completely
            const readMoreBtn = details.previousElementSibling; // Find the "Read More" button
            if (readMoreBtn) {
                readMoreBtn.style.display = 'block'; // Show the "Read More" button again
            }
        }, 300); // Match the fade-out transition duration
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const text = "Welcome to Akash's Portfolio";
    const animatedTextElement = document.getElementById("animated-text");

    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            animatedTextElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Adjust typing speed here
        }
    }

    typeEffect();
});

// Initialize AOS animations
AOS.init();

