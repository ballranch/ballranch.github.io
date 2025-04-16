document.addEventListener('DOMContentLoaded', function() {
    let currentImageIndex = 0;
    const slides = document.querySelectorAll('.slide');
    slides[currentImageIndex].style.display = 'block';

    setInterval(function() {
        slides[currentImageIndex].style.display = 'none';
        currentImageIndex = (currentImageIndex + 1) % slides.length;
        slides[currentImageIndex].style.display = 'block';
    }, 3000);
});
