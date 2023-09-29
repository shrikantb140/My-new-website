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
