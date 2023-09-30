// JavaScript for movie post interaction
const moviePosts = document.querySelectorAll('.movie-post');

// Add click event listeners to each movie post
moviePosts.forEach((post) => {
    post.addEventListener('click', () => {
        // Toggle the visibility of the post content
        const content = post.querySelector('.post-content');
        content.classList.toggle('show-content');
    });
});

// JavaScript for mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navbar = document.querySelector('.navbar');

// Function to toggle the menu
function toggleMenu() {
    navbar.classList.toggle('show-menu');
}

mobileMenuToggle.addEventListener('click', toggleMenu);
mobileMenuToggle.addEventListener('touchstart', toggleMenu);
