// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation (optional)
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
});
