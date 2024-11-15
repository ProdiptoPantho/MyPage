document.addEventListener('DOMContentLoaded', () => {
    // Display the last modified date in the footer
    const lastModified = document.getElementById('last-modified');
    lastModified.textContent = document.lastModified;

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

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
            e.preventDefault(); 

            
            body.classList.add('fade-out');

            
            setTimeout(() => {
                window.location.href = viewProjectBtn.href; 
            }, 700); 
        });
    }

    // Handle smooth fade-out effect and redirection to Home page
    const viewHomeBtn = document.getElementById('viewHomeBtn');
    if (viewHomeBtn) {
        viewHomeBtn.addEventListener('click', function (e) {
            e.preventDefault();

            
            body.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = viewHomeBtn.href; 
            }, 700);
        });
    }
});
