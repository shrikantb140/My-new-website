// JavaScript for movie post interaction
const moviePosts = document.querySelectorAll('.movie-post');

// Add click event listeners to each movie post
moviePosts.forEach((post) => {
    post.addEventListener('click', () => {
        // Toggle a class to display/hide additional details
        post.classList.toggle('show-details');
    });
});
