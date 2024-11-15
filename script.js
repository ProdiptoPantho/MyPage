document.addEventListener('DOMContentLoaded', () => {
    // Display the last modified date in the footer
    const lastModified = document.getElementById('last-modified');
    lastModified.textContent = document.lastModified;

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Get the target section
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            // Scroll to the target element with an offset to account for the navbar height
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    // Scroll to the contact section when clicking the "Contact Me" button
    const contactButton = document.querySelector('.btn-primary');
    contactButton.addEventListener('click', () => {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Handle smooth fade-out effect and redirection to project page
    const viewProjectBtn = document.getElementById('viewProjectBtn');
    const body = document.body;

    if (viewProjectBtn) {
        viewProjectBtn.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent immediate link redirection

            // Add fade-out effect to the body
            body.classList.add('fade-out');

            // Redirect after the fade-out effect completes (700ms delay to account for visibility change)
            setTimeout(() => {
                window.location.href = viewProjectBtn.href; // Redirect to project.html
            }, 700); // Increased duration to ensure smooth transition
        });
    }

    // Handle smooth fade-out effect and redirection to home page (viewHomeBtn)
    const viewHomeBtn = document.getElementById('viewHomeBtn');
    if (viewHomeBtn) {
        viewHomeBtn.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent immediate link redirection

            // Add fade-out effect to the body
            body.classList.add('fade-out');

            // Redirect after the fade-out effect completes (700ms delay to account for visibility change)
            setTimeout(() => {
                window.location.href = viewHomeBtn.href; // Redirect to index.html
            }, 700); // Increased duration to ensure smooth transition
        });
    }
});
