// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add Animate.css animations to elements
document.querySelectorAll('.rom-box').forEach(box => {
    box.addEventListener('mouseenter', function () {
        this.classList.add('animate__animated', 'animate__bounce');
    });

    box.addEventListener('mouseleave', function () {
        this.classList.remove('animate__animated', 'animate__bounce');
    });
});
