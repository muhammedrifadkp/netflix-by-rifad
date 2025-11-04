// Header background change on scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('black-bg');
    } else {
        header.classList.remove('black-bg');
    }
});

// Add hover effect to movie rows
const rows = document.querySelectorAll('.row');

rows.forEach(row => {
    const posters = row.querySelectorAll('.row-poster');

    posters.forEach(poster => {
        poster.addEventListener('mouseenter', () => {
            posters.forEach(p => {
                if (p !== poster) {
                    p.style.opacity = '0.7';
                    p.style.transform = 'scale(0.95)';
                }
            });
        });

        poster.addEventListener('mouseleave', () => {
            posters.forEach(p => {
                p.style.opacity = '1';
                p.style.transform = 'scale(1)';
            });
        });
    });
});

// Banner play button functionality
const playButton = document.querySelector('.banner-button');
playButton.addEventListener('click', () => {
    alert('Playing Money Heist!');
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
