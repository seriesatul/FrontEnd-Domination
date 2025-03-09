const API_KEY = 'b1baaadc9be6d476afe6ba9f02b5f048'; // Replace with your TMDb API key
const trendingContainer = document.getElementById('trending-container');
const heroSection = document.getElementById('hero-section');
const heroTitle = document.getElementById('hero-title');
const heroOverview = document.getElementById('hero-overview');
const searchInput = document.getElementById('search-input');

// Fetch trending movies
async function fetchTrendingMovies() {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`);
    const data = await response.json();
    displayTrendingMovies(data.results);
    displayHeroMovie(data.results[0]); // Display the first trending movie as hero
}

// Display trending movies in a horizontal scrollable format
function displayTrendingMovies(movies) {
    trendingContainer.innerHTML = '';
    movies.forEach(movie => {
        const img = document.createElement('img');
        img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        img.alt = movie.title;
        img.onclick = () => displayHeroMovie(movie); // Set hero movie on click
        trendingContainer.appendChild(img);
    });
}

// Display the selected movie in the hero section
function displayHeroMovie(movie) {
    heroSection.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
    heroTitle.innerText = movie.title;
    heroOverview.innerText = movie.overview;
}

// Search functionality
searchInput.addEventListener('input', async (event) => {
    const query = event.target.value;
    if (query) {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
        const data = await response.json();
        displayTrendingMovies(data.results);
    } else {
        fetchTrendingMovies(); // Fetch trending movies if search input is empty
    }
});

// Initial fetch
fetchTrendingMovies();

const genres = {
    action: 28,
    comedy: 35,
    drama: 18,
    horror: 27,
    romance: 10749
};

// Function to fetch movies by genre
async function fetchMoviesByGenre(genreId, containerId) {
    const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
    );
    const data = await response.json();
    displayMoviesInContainer(data.results, containerId);
}

// Display movies in their respective containers
function displayMoviesInContainer(movies, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    movies.forEach(movie => {
        if (movie.poster_path) {
            const img = document.createElement('img');
            img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            img.alt = movie.title;
            img.onclick = () => displayHeroMovie(movie);
            container.appendChild(img);
        }
    });
}

// Fetch movies for each genre
fetchMoviesByGenre(genres.action, 'action-container');
fetchMoviesByGenre(genres.comedy, 'comedy-container');
fetchMoviesByGenre(genres.drama, 'drama-container');
fetchMoviesByGenre(genres.horror, 'horror-container');
fetchMoviesByGenre(genres.romance, 'romance-container');


const modal = document.getElementById('movie-modal');
const closeButton = document.querySelector('.close-button');
const modalTitle = document.getElementById('modal-title');
const modalPoster = document.getElementById('modal-poster');
const modalOverview = document.getElementById('modal-overview');
const modalRating = document.getElementById('modal-rating');
const modalReleaseDate = document.getElementById('modal-release-date');

// Update the displayHeroMovie function to handle clicks
function displayHeroMovie(movie) {
    heroSection.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
    heroTitle.innerText = movie.title;
    heroOverview.innerText = movie.overview;

    // Add click event to hero section
    heroSection.onclick = () => openModal(movie);
}

// Update the displayMoviesInContainer function to handle clicks
function displayMoviesInContainer(movies, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    movies.forEach(movie => {
        if (movie.poster_path) {
            const img = document.createElement('img');
            img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            img.alt = movie.title;
            img.onclick = () => openModal(movie);
            container.appendChild(img);
        }
    });
}

// Function to open modal with movie details
function openModal(movie) {
    modalTitle.textContent = movie.title;
    modalPoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    modalPoster.alt = movie.title;
    modalOverview.textContent = movie.overview;
    modalRating.textContent = `Rating: ${movie.vote_average}/10`;
    modalReleaseDate.textContent = `Release Date: ${movie.release_date}`;
    modal.style.display = 'block';
}

// Close modal when clicking the close button
closeButton.onclick = () => {
    modal.style.display = 'none';
}

// Close modal when clicking outside the modal content
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

const searchResults = document.getElementById('search-results');
const searchContainer = document.getElementById('search-container');

searchInput.addEventListener('input', async (event) => {
    const query = event.target.value;
    if (query) {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
        const data = await response.json();
        displaySearchResults(data.results);
        searchResults.style.display = 'block';
    } else {
        searchResults.style.display = 'none';
        fetchTrendingMovies();
    }
});

function displaySearchResults(movies) {
    searchContainer.innerHTML = '';
    movies.forEach(movie => {
        if (movie.poster_path) {
            const img = document.createElement('img');
            img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            img.alt = movie.title;
            img.onclick = () => openModal(movie);
            searchContainer.appendChild(img);
        }
    });
}