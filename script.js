/* ============================================
   MOVIE WORLD - CineSubz Clone JavaScript
   ============================================ */

// ============================================
// MOVIE DATA (26 movies/shows)
// ============================================
const moviesData = [
    {
        id: 0, title: "The Dark Knight", year: 2008, rating: 9.0,
        duration: "2h 32m", genre: ["Action", "Crime", "Drama"],
        description: "When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest psychological tests of his ability to fight injustice.",
        image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&q=80",
        type: "movie", trending: true, popular: true,
        quality: "BluRay", badge: "hot"
    },
    {
        id: 1, title: "Inception", year: 2010, rating: 8.8,
        duration: "2h 28m", genre: ["Action", "Sci-Fi", "Thriller"],
        description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80",
        type: "movie", trending: true, popular: true,
        quality: "WEB-DL", badge: "hot"
    },
    {
        id: 2, title: "Interstellar", year: 2014, rating: 8.6,
        duration: "2h 49m", genre: ["Sci-Fi", "Drama", "Adventure"],
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&q=80",
        type: "movie", trending: true, popular: true,
        quality: "BluRay", badge: ""
    },
    {
        id: 3, title: "Stranger Things", year: 2016, rating: 8.7,
        duration: "4 Seasons", genre: ["Sci-Fi", "Horror", "Drama"],
        description: "When a young boy disappears, his mother and friends must confront terrifying supernatural forces to get him back.",
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80",
        type: "tv", trending: true, popular: true,
        quality: "WEB-DL", badge: "series"
    },
    {
        id: 4, title: "The Mandalorian", year: 2019, rating: 8.7,
        duration: "3 Seasons", genre: ["Sci-Fi", "Action", "Adventure"],
        description: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
        image: "https://images.unsplash.com/photo-1614726365723-49cfae9278b7?w=400&q=80",
        type: "tv", trending: true, popular: true,
        quality: "WEB-DL", badge: "series"
    },
    {
        id: 5, title: "Breaking Bad", year: 2008, rating: 9.5,
        duration: "5 Seasons", genre: ["Crime", "Drama", "Thriller"],
        description: "A high school chemistry teacher turned methamphetamine manufacturing drug dealer navigates the criminal underworld.",
        image: "https://images.unsplash.com/photo-1598899132519-587156c92b58?w=400&q=80",
        type: "tv", trending: true, popular: true,
        quality: "BluRay", badge: "hot"
    },
    {
        id: 6, title: "Mad Max: Fury Road", year: 2015, rating: 8.1,
        duration: "2h", genre: ["Action", "Adventure", "Sci-Fi"],
        description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.",
        image: "https://images.unsplash.com/photo-1533109721025-d1ae7ee7c1e1?w=400&q=80",
        type: "movie", trending: false, popular: true,
        quality: "WEB-DL", badge: ""
    },
    {
        id: 7, title: "John Wick", year: 2014, rating: 7.4,
        duration: "1h 41m", genre: ["Action", "Crime", "Thriller"],
        description: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
        image: "https://images.unsplash.com/photo-1550100136-e074fa714874?w=400&q=80",
        type: "movie", trending: false, popular: true,
        quality: "BluRay", badge: ""
    },
    {
        id: 8, title: "Gladiator", year: 2000, rating: 8.5,
        duration: "2h 35m", genre: ["Action", "Adventure", "Drama"],
        description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.",
        image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=400&q=80",
        type: "movie", trending: false, popular: true,
        quality: "BluRay", badge: ""
    },
    {
        id: 9, title: "The Witcher", year: 2019, rating: 8.0,
        duration: "3 Seasons", genre: ["Action", "Adventure", "Fantasy"],
        description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
        image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=400&q=80",
        type: "tv", trending: false, popular: true,
        quality: "WEB-DL", badge: "series"
    },
    {
        id: 10, title: "The Conjuring", year: 2013, rating: 7.5,
        duration: "1h 52m", genre: ["Horror", "Mystery", "Thriller"],
        description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
        image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400&q=80",
        type: "movie", trending: false, popular: true,
        quality: "WEB-DL", badge: ""
    },
    {
        id: 11, title: "A Quiet Place", year: 2018, rating: 7.5,
        duration: "1h 30m", genre: ["Horror", "Drama", "Sci-Fi"],
        description: "A family must live their lives in silence to hide from creatures that hunt by sound.",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80",
        type: "movie", trending: false, popular: true,
        quality: "BluRay", badge: ""
    },
    {
        id: 12, title: "Hereditary", year: 2018, rating: 7.3,
        duration: "2h 7m", genre: ["Horror", "Drama", "Mystery"],
        description: "A grieving family is haunted by tragic and disturbing occurrences after the death of their secretive grandmother.",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80",
        type: "movie", trending: false, popular: true,
        quality: "WEB-DL", badge: ""
    },
    {
        id: 13, title: "The Haunting of Hill House", year: 2018, rating: 8.6,
        duration: "1 Season", genre: ["Horror", "Drama", "Mystery"],
        description: "A fractured family confronts haunting memories of their old home and the terrifying events that drove them from it.",
        image: "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=400&q=80",
        type: "tv", trending: false, popular: true,
        quality: "WEB-DL", badge: "series"
    },
    {
        id: 14, title: "The Office", year: 2005, rating: 9.0,
        duration: "9 Seasons", genre: ["Comedy"],
        description: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes and inappropriate behavior.",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&q=80",
        type: "tv", trending: false, popular: true,
        quality: "WEB-DL", badge: "series"
    },
    {
        id: 15, title: "Brooklyn Nine-Nine", year: 2013, rating: 8.4,
        duration: "8 Seasons", genre: ["Comedy", "Crime"],
        description: "Jake Peralta, an immature but talented NYPD detective, comes into conflict with his new commanding officer.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80",
        type: "tv", trending: false, popular: true,
        quality: "WEB-DL", badge: "series"
    },
    {
        id: 16, title: "Superbad", year: 2007, rating: 7.6,
        duration: "1h 53m", genre: ["Comedy"],
        description: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan goes awry.",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80",
        type: "movie", trending: false, popular: true,
        quality: "BluRay", badge: ""
    },
    {
        id: 17, title: "Parks and Recreation", year: 2009, rating: 8.6,
        duration: "7 Seasons", genre: ["Comedy"],
        description: "The absurd antics of an Indiana town's public officials as they pursue sundry projects to make their city better.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80",
        type: "tv", trending: false, popular: true,
        quality: "WEB-DL", badge: "series"
    },
    {
        id: 18, title: "Blade Runner 2049", year: 2017, rating: 8.0,
        duration: "2h 44m", genre: ["Sci-Fi", "Drama", "Action"],
        description: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard.",
        image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=400&q=80",
        type: "movie", trending: false, popular: true,
        quality: "BluRay", badge: ""
    },
    {
        id: 19, title: "Dune", year: 2021, rating: 8.0,
        duration: "2h 35m", genre: ["Sci-Fi", "Adventure", "Drama"],
        description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset.",
        image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&q=80",
        type: "movie", trending: false, popular: true,
        quality: "WEB-DL", badge: "new"
    },
    {
        id: 20, title: "The Expanse", year: 2015, rating: 8.5,
        duration: "6 Seasons", genre: ["Sci-Fi", "Drama", "Mystery"],
        description: "In the 24th century, a disparate band of antiheroes unravel a vast conspiracy that threatens the system's fragile state.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
        type: "tv", trending: false, popular: true,
        quality: "WEB-DL", badge: "series"
    },
    {
        id: 21, title: "Black Mirror", year: 2011, rating: 8.7,
        duration: "6 Seasons", genre: ["Sci-Fi", "Drama", "Thriller"],
        description: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80",
        type: "tv", trending: false, popular: true,
        quality: "WEB-DL", badge: "series"
    },
    {
        id: 22, title: "Parasite", year: 2019, rating: 8.5,
        duration: "2h 12m", genre: ["Drama", "Thriller", "Comedy"],
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80",
        type: "movie", trending: true, popular: true,
        quality: "BluRay", badge: "hot"
    },
    {
        id: 23, title: "Game of Thrones", year: 2011, rating: 9.2,
        duration: "8 Seasons", genre: ["Drama", "Fantasy", "Action"],
        description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
        image: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=400&q=80",
        type: "tv", trending: true, popular: true,
        quality: "WEB-DL", badge: "series"
    },
    {
        id: 24, title: "Oppenheimer", year: 2023, rating: 8.4,
        duration: "3h", genre: ["Drama", "Biography", "History"],
        description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=80",
        type: "movie", trending: true, popular: true,
        quality: "WEB-DL", badge: "new"
    },
    {
        id: 25, title: "The Boys", year: 2019, rating: 8.7,
        duration: "4 Seasons", genre: ["Action", "Crime", "Drama"],
        description: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
        image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&q=80",
        type: "tv", trending: true, popular: true,
        quality: "WEB-DL", badge: "hot"
    }
];

// ============================================
// STATE
// ============================================
let watchlist = JSON.parse(localStorage.getItem('movieWorld_watchlist')) || [];
let currentModalMovie = null;
let currentWatchId = null;
let isSignUp = false;

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
    }, 2200);

    initHomePage();
    initMoviesPage();
    initTVShowsPage();
    initTrendingPage();
    initWatchlistPage();

    document.getElementById('searchInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
});

// ============================================
// PAGE NAVIGATION
// ============================================
function showPage(pageName) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(`page-${pageName}`);
    if (target) target.classList.add('active');

    document.querySelectorAll('.nav-menu a').forEach(a => {
        a.classList.remove('active');
    });

    window.scrollTo(0, 0);

    const footer = document.getElementById('footer');
    footer.style.display = (pageName === 'login' || pageName === 'watch') ? 'none' : 'block';

    if (pageName === 'watchlist') initWatchlistPage();
    if (pageName === 'trending') initTrendingPage();
}

function toggleMenu() {
    document.getElementById('hamburger').classList.toggle('active');
    document.getElementById('mobile-menu').classList.toggle('active');
}

// ============================================
// HOME PAGE
// ============================================
function initHomePage() {
    renderGrid('trending-grid', moviesData.filter(m => m.trending).slice(0, 8));
    renderGrid('latest-grid', moviesData.filter(m => m.type === 'movie').slice(0, 8));
    renderGrid('tv-grid', moviesData.filter(m => m.type === 'tv').slice(0, 8));
    renderGrid('toprated-grid', [...moviesData].sort((a,b) => b.rating - a.rating).slice(0, 8));
}

// ============================================
// MOVIE CARD CREATOR
// ============================================
function createCard(movie) {
    const inList = watchlist.includes(movie.id);
    const badgeClass = movie.badge || '';
    const badgeText = movie.badge === 'hot' ? '🔥 Hot' : movie.badge === 'new' ? 'New' : movie.badge === 'series' ? 'Series' : '';

    return `
        <div class="movie-card" onclick="showTrailer(${movie.id})">
            ${badgeText ? `<div class="movie-card-badge ${badgeClass}">${badgeText}</div>` : ''}
            <img src="${movie.image}" alt="${movie.title}" class="movie-card-img" loading="lazy">
            <div class="movie-card-overlay">
                <button class="card-action-btn" onclick="event.stopPropagation(); playMovie(${movie.id})">
                    <i class="fas fa-play"></i>
                </button>
                <button class="card-action-btn watchlist ${inList ? 'in-list' : ''}" onclick="event.stopPropagation(); toggleWatchlist(${movie.id})">
                    <i class="fas ${inList ? 'fa-check' : 'fa-plus'}"></i>
                </button>
            </div>
            <div class="movie-card-info">
                <div class="movie-card-title">${movie.title}</div>
                <div class="movie-card-meta">
                    <span class="movie-card-rating"><i class="fas fa-star"></i> ${movie.rating}</span>
                    <span class="movie-card-quality">${movie.quality}</span>
                    <span class="movie-card-year">${movie.year}</span>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// RENDER GRID
// ============================================
function renderGrid(containerId, movies) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const empty = container.querySelector('.empty-state');
    if (movies.length === 0) {
        if (empty) empty.style.display = 'flex';
        container.querySelectorAll('.movie-card').forEach(c => c.remove());
        return;
    }

    if (empty) empty.style.display = 'none';
    const existingCards = container.querySelectorAll('.movie-card');
    existingCards.forEach(c => c.remove());

    movies.forEach(movie => {
        const div = document.createElement('div');
        div.innerHTML = createCard(movie);
        container.appendChild(div.firstElementChild);
    });
}

// ============================================
// MOVIES PAGE
// ============================================
function initMoviesPage() {
    renderGrid('movies-page-grid', moviesData.filter(m => m.type === 'movie'));
}

function filterMovies(genre, btn) {
    document.querySelectorAll('#page-movies .pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');

    let movies = moviesData.filter(m => m.type === 'movie');
    if (genre !== 'all') {
        movies = movies.filter(m => m.genre.some(g => g.toLowerCase() === genre.toLowerCase()));
    }
    renderGrid('movies-page-grid', movies);
}

// ============================================
// TV SHOWS PAGE
// ============================================
function initTVShowsPage() {
    renderGrid('tvshows-page-grid', moviesData.filter(m => m.type === 'tv'));
}

function filterTVShows(genre, btn) {
    document.querySelectorAll('#page-tvshows .pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');

    let shows = moviesData.filter(m => m.type === 'tv');
    if (genre !== 'all') {
        shows = shows.filter(m => m.genre.some(g => g.toLowerCase() === genre.toLowerCase()));
    }
    renderGrid('tvshows-page-grid', shows);
}

// ============================================
// TRENDING PAGE
// ============================================
function initTrendingPage() {
    const trending = [...moviesData].filter(m => m.trending).sort((a,b) => b.rating - a.rating);
    renderGrid('trending-page-grid', trending);
}

// ============================================
// FILTER BY TYPE (Complete/Incomplete)
// ============================================
function filterByType(type, btn) {
    document.querySelectorAll('.main-nav .pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');

    // This is a demo - in real app would filter by subtitle completion status
    showToast(`Filtered by: ${type}`);
}

// ============================================
// WATCHLIST
// ============================================
function initWatchlistPage() {
    const container = document.getElementById('watchlist-page-grid');
    const empty = document.getElementById('watchlist-empty');
    if (!container || !empty) return;

    const saved = moviesData.filter(m => watchlist.includes(m.id));

    if (saved.length === 0) {
        empty.style.display = 'flex';
        container.querySelectorAll('.movie-card').forEach(c => c.remove());
    } else {
        empty.style.display = 'none';
        container.querySelectorAll('.movie-card').forEach(c => c.remove());
        saved.forEach(movie => {
            const div = document.createElement('div');
            div.innerHTML = createCard(movie);
            container.appendChild(div.firstElementChild);
        });
    }
}

function toggleWatchlist(movieId) {
    const idx = watchlist.indexOf(movieId);
    const movie = moviesData.find(m => m.id === movieId);

    if (idx > -1) {
        watchlist.splice(idx, 1);
        showToast(`Removed "${movie.title}" from watchlist`);
    } else {
        watchlist.push(movieId);
        showToast(`Added "${movie.title}" to watchlist`);
    }

    localStorage.setItem('movieWorld_watchlist', JSON.stringify(watchlist));
    refreshAllGrids();
}

function toggleWatchlistFromModal() {
    if (currentModalMovie !== null) {
        toggleWatchlist(currentModalMovie);
        updateModalBtn(currentModalMovie);
    }
}

function updateModalBtn(movieId) {
    const btn = document.getElementById('modal-watchlist-btn');
    const inList = watchlist.includes(movieId);
    btn.innerHTML = `<i class="fas ${inList ? 'fa-check' : 'fa-plus'}"></i> ${inList ? 'In My List' : 'My List'}`;
}

function refreshAllGrids() {
    // Refresh all visible grids
    const pages = ['home', 'movies', 'tvshows', 'trending', 'watchlist'];
    pages.forEach(page => {
        const pageEl = document.getElementById(`page-${page}`);
        if (pageEl && pageEl.classList.contains('active')) {
            if (page === 'home') initHomePage();
            if (page === 'movies') initMoviesPage();
            if (page === 'tvshows') initTVShowsPage();
            if (page === 'trending') initTrendingPage();
            if (page === 'watchlist') initWatchlistPage();
        }
    });
}

// ============================================
// SEARCH
// ============================================
function performSearch() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    if (!query) return;

    const results = moviesData.filter(movie =>
        movie.title.toLowerCase().includes(query) ||
        movie.genre.some(g => g.toLowerCase().includes(query)) ||
        movie.description.toLowerCase().includes(query)
    );

    document.getElementById('search-query-text').textContent = `"${query}" — ${results.length} results found`;

    const container = document.getElementById('search-page-grid');
    const empty = document.getElementById('search-empty');

    if (results.length === 0) {
        empty.style.display = 'flex';
        container.querySelectorAll('.movie-card').forEach(c => c.remove());
    } else {
        empty.style.display = 'none';
        container.querySelectorAll('.movie-card').forEach(c => c.remove());
        results.forEach(movie => {
            const div = document.createElement('div');
            div.innerHTML = createCard(movie);
            container.appendChild(div.firstElementChild);
        });
    }

    showPage('search');
}

// ============================================
// WATCH / VIDEO PLAYER
// ============================================
function playMovie(movieId) {
    const movie = moviesData.find(m => m.id === movieId);
    if (!movie) return;

    currentWatchId = movieId;
    document.getElementById('watch-title').textContent = movie.title;
    document.getElementById('watch-meta').innerHTML = `
        <span class="rating"><i class="fas fa-star"></i> ${movie.rating}</span>
        <span>${movie.year}</span>
        <span>${movie.duration}</span>
        <span>${movie.genre.join(', ')}</span>
        <span class="movie-card-quality">${movie.quality}</span>
    `;
    document.getElementById('watch-desc').textContent = movie.description;

    const video = document.getElementById('main-video');
    video.poster = movie.image;
    video.querySelector('source').src = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
    video.load();

    document.getElementById('video-overlay').classList.remove('hidden');
    showPage('watch');
}

function playVideo() {
    const video = document.getElementById('main-video');
    document.getElementById('video-overlay').classList.add('hidden');
    video.play();
}

function closeWatch() {
    const video = document.getElementById('main-video');
    video.pause();
    video.currentTime = 0;
    showPage('home');
}

// ============================================
// MODAL
// ============================================
function showTrailer(movieId) {
    const movie = moviesData.find(m => m.id === movieId);
    if (!movie) return;

    currentModalMovie = movieId;
    document.getElementById('modal-img').src = movie.image;
    document.getElementById('modal-title').textContent = movie.title;
    document.getElementById('modal-meta').innerHTML = `
        <span class="rating"><i class="fas fa-star"></i> ${movie.rating}</span>
        <span>${movie.year}</span>
        <span>${movie.duration}</span>
        <span>${movie.quality}</span>
    `;
    document.getElementById('modal-desc').textContent = movie.description;
    document.getElementById('modal-tags').innerHTML = movie.genre.map(g =>
        `<span class="modal-tag">${g}</span>`
    ).join('');

    updateModalBtn(movieId);
    document.getElementById('movie-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('movie-modal').classList.remove('active');
    document.body.style.overflow = '';
    currentModalMovie = null;
}

function playFromModal() {
    if (currentModalMovie !== null) {
        closeModal();
        playMovie(currentModalMovie);
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ============================================
// AUTH
// ============================================
function toggleAuthMode() {
    isSignUp = !isSignUp;
    document.getElementById('auth-title').textContent = isSignUp ? 'Sign Up' : 'Sign In';
    document.getElementById('auth-submit').textContent = isSignUp ? 'Sign Up' : 'Sign In';
    document.getElementById('name-group').style.display = isSignUp ? 'block' : 'none';
    document.getElementById('auth-toggle-text').innerHTML = isSignUp
        ? 'Already have an account? <a href="#" onclick="toggleAuthMode()">Sign in</a>'
        : 'New to MOVIE WORLD? <a href="#" onclick="toggleAuthMode()">Sign up now</a>';
}

function handleAuth(e) {
    e.preventDefault();
    showToast(isSignUp ? 'Account created!' : 'Welcome back!');
    setTimeout(() => showPage('home'), 1000);
}

function togglePassword() {
    const input = document.getElementById('auth-password');
    const eye = document.getElementById('password-eye');
    if (input.type === 'password') {
        input.type = 'text';
        eye.className = 'fas fa-eye-slash';
    } else {
        input.type = 'password';
        eye.className = 'fas fa-eye';
    }
}

// ============================================
// TOAST
// ============================================
function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-message').textContent = message;
    toast.classList.add('active');
    setTimeout(() => toast.classList.remove('active'), 3000);
}
