// Modal Logic
const modal = document.getElementById('certificate-modal');
const iframe = document.getElementById('certificate-frame');
const closeModal = document.getElementById('close-modal');

// Open Modal
document.querySelectorAll('.view-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        const pdfPath = btn.getAttribute('data-pdf');
        iframe.src = pdfPath; // Load the PDF in the iframe
        modal.style.display = 'flex'; // Show the modal
    });
});

// Close Modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide the modal
    iframe.src = ''; // Clear the iframe
});

// Close Modal on Outside Click
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        iframe.src = '';
    }
});


// Close the dropdown when clicking outside
document.addEventListener('click', (event) => {
    if (!menuIcon.contains(event.target)) {
        menuIcon.classList.remove('active');
        dropdownMenu.style.display = 'none';
    }
});
// Dropdown menu toggle
const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

menuToggle.addEventListener('click', () => {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Close the dropdown when clicking outside
document.addEventListener('click', (event) => {
    if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});
