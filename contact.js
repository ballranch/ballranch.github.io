document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simulate form submission (you can replace this with actual form submission logic)
        formResponse.textContent = `Thank you, ${name}! Your message has been sent.`;
        form.reset(); // Reset the form
    });
});
