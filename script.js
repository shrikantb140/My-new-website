// Get all "Learn More" buttons and details divs
const movieButtons = document.querySelectorAll('.movie-button');
const movieDetails = document.querySelectorAll('.movie-details');

// Add click event listeners to each button
movieButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Toggle the visibility of the corresponding movie details
        movieDetails[index].classList.toggle('show-details');
    });
});
