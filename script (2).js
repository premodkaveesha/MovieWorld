/* ============================================
   MOVIE WORLD - Premium Streaming Platform
   Vanilla JavaScript - No Frameworks
   ============================================ */

// ============================================
// MOVIE DATA
// ============================================
const moviesData = {
    featured: [
        {
            id: 1,
            title: "Dune: Part Two",
            description: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee.",
            rating: 8.9,
            year: 2024,
            runtime: "166 min",
            quality: "IMAX",
            genres: ["Sci-Fi", "Adventure", "Drama"],
            backdrop: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1920&h=1080&fit=crop",
            poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop",
            trailer: "https://www.youtube.com/embed/Way9Dexny3w",
            cast: [
                { name: "Timothée Chalamet", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
                { name: "Zendaya", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" },
                { name: "Rebecca Ferguson", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" },
                { name: "Josh Brolin", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" }
            ],
            director: "Denis Villeneuve",
            language: "English",
            releaseDate: "March 1, 2024"
        },
        {
            id: 2,
            title: "Oppenheimer",
            description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb. A gripping historical drama that explores the moral complexities of scientific discovery and its devastating consequences.",
            rating: 8.6,
            year: 2023,
            runtime: "180 min",
            quality: "4K",
            genres: ["Biography", "Drama", "History"],
            backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&h=1080&fit=crop",
            poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
            trailer: "https://www.youtube.com/embed/bK6ldnjE3Y0",
            cast: [
                { name: "Cillian Murphy", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face" },
                { name: "Emily Blunt", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face" },
                { name: "Matt Damon", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" },
                { name: "Robert Downey Jr.", image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face" }
            ],
            director: "Christopher Nolan",
            language: "English",
            releaseDate: "July 21, 2023"
        },
        {
            id: 3,
            title: "The Batman",
            description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement. A dark and gritty detective story.",
            rating: 7.8,
            year: 2022,
            runtime: "176 min",
            quality: "4K",
            genres: ["Action", "Crime", "Drama"],
            backdrop: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&h=1080&fit=crop",
            poster: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=400&h=600&fit=crop",
            trailer: "https://www.youtube.com/embed/mqqft2x_Aa4",
            cast: [
                { name: "Robert Pattinson", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" },
                { name: "Zoë Kravitz", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" },
                { name: "Jeffrey Wright", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
                { name: "Colin Farrell", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" }
            ],
            director: "Matt Reeves",
            language: "English",
            releaseDate: "March 4, 2022"
        },
        {
            id: 4,
            title: "Avatar: The Way of Water",
            description: "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.",
            rating: 7.6,
            year: 2022,
            runtime: "192 min",
            quality: "IMAX 3D",
            genres: ["Sci-Fi", "Action", "Adventure"],
            backdrop: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&h=1080&fit=crop",
            poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=600&fit=crop",
            trailer: "https://www.youtube.com/embed/5PSNL1qE6VY",
            cast: [
                { name: "Sam Worthington", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face" },
                { name: "Zoe Saldana", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" },
                { name: "Sigourney Weaver", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face" },
                { name: "Stephen Lang", image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face" }
            ],
            director: "James Cameron",
            language: "English",
            releaseDate: "December 16, 2022"
        },
        {
            id: 5,
            title: "Spider-Man: Across the Spider-Verse",
            description: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
            rating: 8.7,
            year: 2023,
            runtime: "140 min",
            quality: "HD",
            genres: ["Animation", "Action", "Adventure"],
            backdrop: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=1920&h=1080&fit=crop",
            poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop",
            trailer: "https://www.youtube.com/embed/shW9i6k8cB0",
            cast: [
                { name: "Shameik Moore", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" },
                { name: "Hailee Steinfeld", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" },
                { name: "Brian Tyree Henry", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
                { name: "Luna Lauren Vélez", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" }
            ],
            director: "Joaquim Dos Santos",
            language: "English",
            releaseDate: "June 2, 2023"
        }
    ],
    trending: [
        { id: 6, title: "Deadpool & Wolverine", rating: 8.1, year: 2024, quality: "HD", poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=600&fit=crop", genres: ["Action", "Comedy"] },
        { id: 7, title: "Inside Out 2", rating: 7.9, year: 2024, quality: "HD", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop", genres: ["Animation", "Comedy"] },
        { id: 8, title: "Furiosa", rating: 7.5, year: 2024, quality: "4K", poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop", genres: ["Action", "Sci-Fi"] },
        { id: 9, title: "Kingdom of the Planet of the Apes", rating: 7.2, year: 2024, quality: "HD", poster: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=400&h=600&fit=crop", genres: ["Sci-Fi", "Action"] },
        { id: 10, title: "Godzilla x Kong", rating: 6.8, year: 2024, quality: "IMAX", poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop", genres: ["Action", "Sci-Fi"] },
        { id: 11, title: "Bad Boys: Ride or Die", rating: 7.0, year: 2024, quality: "HD", poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop", genres: ["Action", "Comedy"] },
        { id: 12, title: "The Fall Guy", rating: 7.3, year: 2024, quality: "HD", poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop", genres: ["Action", "Comedy"] }
    ],
    latest: [
        { id: 13, title: "Civil War", rating: 7.4, year: 2024, quality: "4K", poster: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop", genres: ["Action", "Drama"] },
        { id: 14, title: "Challengers", rating: 7.6, year: 2024, quality: "HD", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop", genres: ["Drama", "Romance"] },
        { id: 15, title: "The Ministry of Ungentlemanly Warfare", rating: 7.1, year: 2024, quality: "HD", poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=600&fit=crop", genres: ["Action", "War"] },
        { id: 16, title: "Abigail", rating: 6.9, year: 2024, quality: "HD", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop", genres: ["Horror", "Thriller"] },
        { id: 17, title: "The First Omen", rating: 6.7, year: 2024, quality: "HD", poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop", genres: ["Horror", "Thriller"] },
        { id: 18, title: "Monkey Man", rating: 7.0, year: 2024, quality: "HD", poster: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=400&h=600&fit=crop", genres: ["Action", "Thriller"] },
        { id: 19, title: "Ghostbusters: Frozen Empire", rating: 6.5, year: 2024, quality: "HD", poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop", genres: ["Comedy", "Fantasy"] }
    ],
    tvSeries: [
        { id: 20, title: "House of the Dragon", rating: 8.4, year: 2022, quality: "4K", poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop", genres: ["Fantasy", "Drama"], episodes: 10 },
        { id: 21, title: "The Last of Us", rating: 8.7, year: 2023, quality: "4K", poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop", genres: ["Drama", "Horror"], episodes: 9 },
        { id: 22, title: "Severance", rating: 8.7, year: 2022, quality: "4K", poster: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop", genres: ["Sci-Fi", "Thriller"], episodes: 10 },
        { id: 23, title: "The Bear", rating: 8.6, year: 2022, quality: "HD", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop", genres: ["Drama", "Comedy"], episodes: 10 },
        { id: 24, title: "Silo", rating: 8.1, year: 2023, quality: "HD", poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=600&fit=crop", genres: ["Sci-Fi", "Mystery"], episodes: 10 },
        { id: 25, title: "Slow Horses", rating: 7.9, year: 2022, quality: "HD", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop", genres: ["Thriller", "Drama"], episodes: 6 },
        { id: 26, title: "For All Mankind", rating: 7.9, year: 2019, quality: "4K", poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop", genres: ["Sci-Fi", "Drama"], episodes: 10 }
    ],
    topRated: [
        { id: 27, title: "The Shawshank Redemption", rating: 9.3, year: 1994, quality: "4K", poster: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=400&h=600&fit=crop", genres: ["Drama"] },
        { id: 28, title: "The Godfather", rating: 9.2, year: 1972, quality: "4K", poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop", genres: ["Crime", "Drama"] },
        { id: 29, title: "The Dark Knight", rating: 9.0, year: 2008, quality: "4K", poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop", genres: ["Action", "Crime"] },
        { id: 30, title: "12 Angry Men", rating: 9.0, year: 1957, quality: "HD", poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop", genres: ["Drama", "Crime"] },
        { id: 31, title: "Schindler's List", rating: 9.0, year: 1993, quality: "4K", poster: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop", genres: ["Biography", "Drama"] },
        { id: 32, title: "Pulp Fiction", rating: 8.9, year: 1994, quality: "4K", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop", genres: ["Crime", "Drama"] },
        { id: 33, title: "Inception", rating: 8.8, year: 2010, quality: "4K", poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=600&fit=crop", genres: ["Sci-Fi", "Action"] }
    ],
    popular: [
        { id: 34, title: "Fallout", rating: 8.4, year: 2024, quality: "4K", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop", genres: ["Sci-Fi", "Action"] },
        { id: 35, title: "3 Body Problem", rating: 7.6, year: 2024, quality: "4K", poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop", genres: ["Sci-Fi", "Drama"] },
        { id: 36, title: "Ripley", rating: 8.0, year: 2024, quality: "HD", poster: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=400&h=600&fit=crop", genres: ["Crime", "Drama"] },
        { id: 37, title: "Shogun", rating: 8.6, year: 2024, quality: "4K", poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop", genres: ["Drama", "History"] },
        { id: 38, title: "Baby Reindeer", rating: 8.1, year: 2024, quality: "HD", poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop", genres: ["Drama", "Thriller"] },
        { id: 39, title: "Blue Eye Samurai", rating: 8.7, year: 2023, quality: "HD", poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop", genres: ["Animation", "Action"] },
        { id: 40, title: "The Gentlemen", rating: 8.0, year: 2024, quality: "HD", poster: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop", genres: ["Crime", "Comedy"] }
    ]
};

const genresData = [
    { name: "Action", icon: "fa-bolt", color: "#FF6B35" },
    { name: "Adventure", icon: "fa-mountain", color: "#4ECDC4" },
    { name: "Animation", icon: "fa-palette", color: "#A8E6CF" },
    { name: "Comedy", icon: "fa-laugh", color: "#FFD93D" },
    { name: "Crime", icon: "fa-user-secret", color: "#6C5CE7" },
    { name: "Drama", icon: "fa-theater-masks", color: "#FD79A8" },
    { name: "Fantasy", icon: "fa-dragon", color: "#00B894" },
    { name: "Horror", icon: "fa-ghost", color: "#E17055" },
    { name: "Mystery", icon: "fa-search", color: "#74B9FF" },
    { name: "Romance", icon: "fa-heart", color: "#FF7675" },
    { name: "Sci-Fi", icon: "fa-rocket", color: "#0A84FF" },
    { name: "Thriller", icon: "fa-exclamation-triangle", color: "#FDCB6E" }
];

// ============================================
// STATE MANAGEMENT
// ============================================
const state = {
    currentHeroSlide: 0,
    heroInterval: null,
    isSearchOpen: false,
    isMobileMenuOpen: false,
    isDarkMode: true,
    currentMovie: null,
    isPlaying: false,
    currentEpisode: 1,
    isTheaterMode: false
};

// ============================================
// DOM ELEMENTS
// ============================================
const elements = {
    loadingScreen: document.getElementById('loading-screen'),
    navbar: document.getElementById('navbar'),
    navLinks: document.getElementById('navLinks'),
    searchBtn: document.getElementById('searchBtn'),
    searchOverlay: document.getElementById('searchOverlay'),
    searchClose: document.getElementById('searchClose'),
    searchInput: document.getElementById('searchInput'),
    searchSuggestions: document.getElementById('searchSuggestions'),
    themeToggle: document.getElementById('themeToggle'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileMenu: document.getElementById('mobileMenu'),
    mobileMenuClose: document.getElementById('mobileMenuClose'),
    heroSlider: document.getElementById('heroSlider'),
    heroTitle: document.getElementById('heroTitle'),
    heroDescription: document.getElementById('heroDescription'),
    heroRating: document.getElementById('heroRating'),
    heroYear: document.getElementById('heroYear'),
    heroRuntime: document.getElementById('heroRuntime'),
    heroQuality: document.getElementById('heroQuality'),
    heroGenres: document.getElementById('heroGenres'),
    heroDots: document.getElementById('heroDots'),
    heroPrev: document.getElementById('heroPrev'),
    heroNext: document.getElementById('heroNext'),
    heroWatchBtn: document.getElementById('heroWatchBtn'),
    heroDownloadBtn: document.getElementById('heroDownloadBtn'),
    trendingSlider: document.getElementById('trendingSlider'),
    latestSlider: document.getElementById('latestSlider'),
    tvSlider: document.getElementById('tvSlider'),
    topRatedSlider: document.getElementById('topRatedSlider'),
    popularSlider: document.getElementById('popularSlider'),
    genresGrid: document.getElementById('genresGrid'),
    movieModal: document.getElementById('movieModal'),
    modalBackdrop: document.getElementById('modalBackdrop'),
    modalClose: document.getElementById('modalClose'),
    modalHero: document.getElementById('modalHero'),
    modalTitle: document.getElementById('modalTitle'),
    modalMeta: document.getElementById('modalMeta'),
    modalDescription: document.getElementById('modalDescription'),
    modalPoster: document.getElementById('modalPoster'),
    modalCast: document.getElementById('modalCast'),
    modalTags: document.getElementById('modalTags'),
    modalStats: document.getElementById('modalStats'),
    modalWatchBtn: document.getElementById('modalWatchBtn'),
    modalDownloadBtn: document.getElementById('modalDownloadBtn'),
    trailerContainer: document.getElementById('trailerContainer'),
    relatedSlider: document.getElementById('relatedSlider'),
    videoModal: document.getElementById('videoModal'),
    videoBackdrop: document.getElementById('videoBackdrop'),
    videoClose: document.getElementById('videoClose'),
    mainVideo: document.getElementById('mainVideo'),
    videoOverlay: document.getElementById('videoOverlay'),
    videoPlayBtn: document.getElementById('videoPlayBtn'),
    videoControls: document.getElementById('videoControls'),
    playPauseBtn: document.getElementById('playPauseBtn'),
    videoProgressBar: document.getElementById('videoProgressBar'),
    videoProgress: document.getElementById('videoProgress'),
    videoProgressHandle: document.getElementById('videoProgressHandle'),
    currentTime: document.getElementById('currentTime'),
    totalTime: document.getElementById('totalTime'),
    volumeBtn: document.getElementById('volumeBtn'),
    volumeSlider: document.getElementById('volumeSlider'),
    volumeLevel: document.getElementById('volumeLevel'),
    prevEpisodeBtn: document.getElementById('prevEpisodeBtn'),
    nextEpisodeBtn: document.getElementById('nextEpisodeBtn'),
    subtitleBtn: document.getElementById('subtitleBtn'),
    theaterBtn: document.getElementById('theaterBtn'),
    fullscreenBtn: document.getElementById('fullscreenBtn'),
    videoTitle: document.getElementById('videoTitle'),
    episodeList: document.getElementById('episodeList'),
    fab: document.getElementById('fab'),
    backToTop: document.getElementById('backToTop'),
    newsletterForm: document.getElementById('newsletterForm')
};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initLoadingScreen();
    initHeroSlider();
    initMovieSliders();
    initGenres();
    initNavigation();
    initSearch();
    initThemeToggle();
    initMobileMenu();
    initModal();
    initVideoPlayer();
    initScrollEffects();
    initBackToTop();
    initNewsletter();
});

// ============================================
// LOADING SCREEN
// ============================================
function initLoadingScreen() {
    setTimeout(() => {
        elements.loadingScreen.classList.add('hidden');
    }, 2500);
}

// ============================================
// HERO SLIDER
// ============================================
function initHeroSlider() {
    const featured = moviesData.featured;

    // Create slides
    featured.forEach((movie, index) => {
        const slide = document.createElement('div');
        slide.className = `hero-slide ${index === 0 ? 'active' : ''}`;
        slide.style.backgroundImage = `url(${movie.backdrop})`;
        elements.heroSlider.appendChild(slide);

        // Create dot
        const dot = document.createElement('button');
        dot.className = `hero-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Slide ${index + 1}`);
        dot.addEventListener('click', () => goToSlide(index));
        elements.heroDots.appendChild(dot);
    });

    updateHeroContent(0);
    startHeroAutoSlide();

    elements.heroPrev.addEventListener('click', () => {
        const newIndex = state.currentHeroSlide === 0 ? featured.length - 1 : state.currentHeroSlide - 1;
        goToSlide(newIndex);
    });

    elements.heroNext.addEventListener('click', () => {
        const newIndex = state.currentHeroSlide === featured.length - 1 ? 0 : state.currentHeroSlide + 1;
        goToSlide(newIndex);
    });

    elements.heroWatchBtn.addEventListener('click', () => {
        openVideoPlayer(moviesData.featured[state.currentHeroSlide]);
    });

    elements.heroDownloadBtn.addEventListener('click', () => {
        showToast('Download started!');
    });
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');

    slides[state.currentHeroSlide].classList.remove('active');
    dots[state.currentHeroSlide].classList.remove('active');

    state.currentHeroSlide = index;

    slides[index].classList.add('active');
    dots[index].classList.add('active');

    updateHeroContent(index);
    resetHeroAutoSlide();
}

function updateHeroContent(index) {
    const movie = moviesData.featured[index];
    elements.heroTitle.textContent = movie.title;
    elements.heroDescription.textContent = movie.description;
    elements.heroRating.textContent = movie.rating;
    elements.heroYear.textContent = movie.year;
    elements.heroRuntime.textContent = movie.runtime;
    elements.heroQuality.textContent = movie.quality;

    elements.heroGenres.innerHTML = movie.genres.map(genre => 
        `<span class="genre-tag">${genre}</span>`
    ).join('');

    // Reset animations
    const animatedElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-meta, .hero-genres, .hero-description, .hero-buttons');
    animatedElements.forEach(el => {
        el.style.animation = 'none';
        el.offsetHeight; // Trigger reflow
        el.style.animation = null;
    });
}

function startHeroAutoSlide() {
    state.heroInterval = setInterval(() => {
        const newIndex = state.currentHeroSlide === moviesData.featured.length - 1 ? 0 : state.currentHeroSlide + 1;
        goToSlide(newIndex);
    }, 6000);
}

function resetHeroAutoSlide() {
    clearInterval(state.heroInterval);
    startHeroAutoSlide();
}

// ============================================
// MOVIE SLIDERS
// ============================================
function initMovieSliders() {
    renderMovieCards(moviesData.trending, elements.trendingSlider);
    renderMovieCards(moviesData.latest, elements.latestSlider);
    renderMovieCards(moviesData.tvSeries, elements.tvSlider);
    renderMovieCards(moviesData.topRated, elements.topRatedSlider);
    renderMovieCards(moviesData.popular, elements.popularSlider);

    // Slider navigation
    document.querySelectorAll('.slider-nav').forEach(btn => {
        btn.addEventListener('click', () => {
            const sliderId = btn.dataset.slider;
            const slider = document.getElementById(getSliderId(sliderId));
            const scrollAmount = btn.classList.contains('prev') ? -slider.offsetWidth / 2 : slider.offsetWidth / 2;
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    });
}

function getSliderId(name) {
    const map = {
        'trending': 'trendingSlider',
        'latest': 'latestSlider',
        'tv': 'tvSlider',
        'toprated': 'topRatedSlider',
        'popular': 'popularSlider'
    };
    return map[name];
}

function renderMovieCards(movies, container) {
    // Show skeleton loading first
    container.innerHTML = Array(5).fill(0).map(() => `
        <div class="skeleton-card">
            <div class="skeleton-poster"></div>
            <div class="skeleton-text"></div>
            <div class="skeleton-text short"></div>
        </div>
    `).join('');

    // Simulate loading delay
    setTimeout(() => {
        container.innerHTML = movies.map(movie => createMovieCard(movie)).join('');

        // Add click events
        container.querySelectorAll('.movie-card').forEach((card, index) => {
            card.addEventListener('click', () => openMovieModal(movies[index]));
        });
    }, 800);
}

function createMovieCard(movie) {
    return `
        <div class="movie-card" data-id="${movie.id}">
            <div class="movie-poster">
                <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
                <div class="movie-overlay">
                    <div class="movie-play"><i class="fas fa-play"></i></div>
                </div>
                <span class="movie-quality">${movie.quality}</span>
                <span class="movie-rating-badge"><i class="fas fa-star"></i> ${movie.rating}</span>
            </div>
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-meta">
                    <span>${movie.year}</span>
                    <span class="movie-year">${movie.genres[0]}</span>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// GENRES
// ============================================
function initGenres() {
    elements.genresGrid.innerHTML = genresData.map(genre => `
        <div class="genre-card" style="background: linear-gradient(135deg, ${genre.color}22, ${genre.color}44)">
            <div class="genre-card-content">
                <i class="fas ${genre.icon}"></i>
                <span>${genre.name}</span>
            </div>
        </div>
    `).join('');

    elements.genresGrid.querySelectorAll('.genre-card').forEach(card => {
        card.addEventListener('click', () => {
            showToast(`Browsing ${card.querySelector('span').textContent} movies...`);
        });
    });
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            elements.navbar.classList.add('scrolled');
        } else {
            elements.navbar.classList.remove('scrolled');
        }
    });

    // Smooth scroll for nav links
    document.querySelectorAll('.nav-link, .mobile-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });

                // Update active state
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                if (link.classList.contains('nav-link')) {
                    link.classList.add('active');
                }

                // Close mobile menu
                closeMobileMenu();
            }
        });
    });
}

// ============================================
// SEARCH
// ============================================
function initSearch() {
    elements.searchBtn.addEventListener('click', openSearch);
    elements.searchClose.addEventListener('click', closeSearch);
    elements.searchOverlay.addEventListener('click', (e) => {
        if (e.target === elements.searchOverlay) closeSearch();
    });

    elements.searchInput.addEventListener('input', debounce(handleSearch, 300));
    elements.searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeSearch();
    });
}

function openSearch() {
    state.isSearchOpen = true;
    elements.searchOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => elements.searchInput.focus(), 300);
}

function closeSearch() {
    state.isSearchOpen = false;
    elements.searchOverlay.classList.remove('active');
    document.body.style.overflow = '';
    elements.searchInput.value = '';
    elements.searchSuggestions.classList.remove('active');
    elements.searchSuggestions.innerHTML = '';
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();

    if (query.length < 2) {
        elements.searchSuggestions.classList.remove('active');
        return;
    }

    const allMovies = [...moviesData.featured, ...moviesData.trending, ...moviesData.latest, 
                       ...moviesData.tvSeries, ...moviesData.topRated, ...moviesData.popular];

    const results = allMovies.filter(movie => 
        movie.title.toLowerCase().includes(query) ||
        (movie.genres && movie.genres.some(g => g.toLowerCase().includes(query)))
    ).slice(0, 6);

    if (results.length > 0) {
        elements.searchSuggestions.innerHTML = results.map(movie => `
            <div class="suggestion-item" data-id="${movie.id}">
                <img src="${movie.poster}" alt="${movie.title}" class="suggestion-poster">
                <div class="suggestion-info">
                    <h4>${movie.title}</h4>
                    <p>${movie.year} • ${movie.genres ? movie.genres.join(', ') : 'Movie'}</p>
                </div>
            </div>
        `).join('');

        elements.searchSuggestions.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                const movieId = parseInt(item.dataset.id);
                const movie = allMovies.find(m => m.id === movieId);
                if (movie) {
                    closeSearch();
                    openMovieModal(movie);
                }
            });
        });

        elements.searchSuggestions.classList.add('active');
    } else {
        elements.searchSuggestions.innerHTML = `
            <div class="suggestion-item" style="justify-content: center; padding: 2rem;">
                <p style="color: var(--text-muted);">No results found for "${query}"</p>
            </div>
        `;
        elements.searchSuggestions.classList.add('active');
    }
}

// ============================================
// THEME TOGGLE
// ============================================
function initThemeToggle() {
    const savedTheme = localStorage.getItem('movieWorldTheme');
    if (savedTheme === 'light') {
        setLightMode();
    }

    elements.themeToggle.addEventListener('click', () => {
        if (state.isDarkMode) {
            setLightMode();
            localStorage.setItem('movieWorldTheme', 'light');
        } else {
            setDarkMode();
            localStorage.setItem('movieWorldTheme', 'dark');
        }
    });
}

function setDarkMode() {
    state.isDarkMode = true;
    document.body.removeAttribute('data-theme');
    elements.themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

function setLightMode() {
    state.isDarkMode = false;
    document.body.setAttribute('data-theme', 'light');
    elements.themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
    elements.mobileMenuBtn.addEventListener('click', openMobileMenu);
    elements.mobileMenuClose.addEventListener('click', closeMobileMenu);

    // Close on backdrop click
    elements.mobileMenu.addEventListener('click', (e) => {
        if (e.target === elements.mobileMenu) closeMobileMenu();
    });
}

function openMobileMenu() {
    state.isMobileMenuOpen = true;
    elements.mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    state.isMobileMenuOpen = false;
    elements.mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// MOVIE MODAL
// ============================================
function initModal() {
    elements.modalClose.addEventListener('click', closeMovieModal);
    elements.modalBackdrop.addEventListener('click', closeMovieModal);
    elements.modalWatchBtn.addEventListener('click', () => {
        closeMovieModal();
        if (state.currentMovie) openVideoPlayer(state.currentMovie);
    });
    elements.modalDownloadBtn.addEventListener('click', () => {
        showToast('Download started!');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMovieModal();
            closeVideoPlayer();
        }
    });
}

function openMovieModal(movie) {
    state.currentMovie = movie;

    elements.modalHero.style.backgroundImage = `url(${movie.backdrop || movie.poster})`;
    elements.modalTitle.textContent = movie.title;

    elements.modalMeta.innerHTML = `
        <span class="rating"><i class="fas fa-star"></i> ${movie.rating}</span>
        <span><i class="fas fa-calendar"></i> ${movie.year}</span>
        <span><i class="fas fa-clock"></i> ${movie.runtime || 'N/A'}</span>
        <span><i class="fas fa-film"></i> ${movie.quality}</span>
    `;

    elements.modalDescription.textContent = movie.description || 'No description available.';

    elements.modalPoster.innerHTML = `<img src="${movie.poster}" alt="${movie.title}">`;

    // Cast
    if (movie.cast) {
        elements.modalCast.innerHTML = `
            <h4>Cast</h4>
            <div class="cast-list">
                ${movie.cast.map(actor => `
                    <div class="cast-member">
                        <img src="${actor.image}" alt="${actor.name}">
                        <span>${actor.name}</span>
                    </div>
                `).join('')}
            </div>
        `;
    } else {
        elements.modalCast.innerHTML = '';
    }

    // Tags
    elements.modalTags.innerHTML = movie.genres.map(genre => 
        `<span class="modal-tag">${genre}</span>`
    ).join('');

    // Stats
    elements.modalStats.innerHTML = `
        <div class="stat-item">
            <span class="stat-value">${movie.rating}</span>
            <span class="stat-label">IMDb Rating</span>
        </div>
        <div class="stat-item">
            <span class="stat-value">${movie.year}</span>
            <span class="stat-label">Release Year</span>
        </div>
        <div class="stat-item">
            <span class="stat-value">${movie.quality}</span>
            <span class="stat-label">Quality</span>
        </div>
        <div class="stat-item">
            <span class="stat-value">${movie.runtime || 'N/A'}</span>
            <span class="stat-label">Runtime</span>
        </div>
    `;

    // Trailer
    if (movie.trailer) {
        elements.trailerContainer.innerHTML = `
            <iframe src="${movie.trailer}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
    } else {
        elements.trailerContainer.innerHTML = `
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: var(--text-muted);">
                <i class="fas fa-video" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <p>Trailer not available</p>
            </div>
        `;
    }

    // Related movies
    const allMovies = [...moviesData.trending, ...moviesData.latest, ...moviesData.popular];
    const related = allMovies.filter(m => m.id !== movie.id && m.genres.some(g => movie.genres.includes(g))).slice(0, 6);
    elements.relatedSlider.innerHTML = related.map(m => createMovieCard(m)).join('');
    elements.relatedSlider.querySelectorAll('.movie-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            openMovieModal(related[index]);
        });
    });

    elements.movieModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMovieModal() {
    elements.movieModal.classList.remove('active');
    document.body.style.overflow = '';
    elements.trailerContainer.innerHTML = '';
    state.currentMovie = null;
}

// ============================================
// VIDEO PLAYER
// ============================================
function initVideoPlayer() {
    elements.videoClose.addEventListener('click', closeVideoPlayer);
    elements.videoBackdrop.addEventListener('click', closeVideoPlayer);
    elements.videoPlayBtn.addEventListener('click', togglePlay);
    elements.playPauseBtn.addEventListener('click', togglePlay);

    elements.mainVideo.addEventListener('click', togglePlay);
    elements.mainVideo.addEventListener('timeupdate', updateProgress);
    elements.mainVideo.addEventListener('loadedmetadata', updateDuration);
    elements.mainVideo.addEventListener('ended', () => {
        state.isPlaying = false;
        updatePlayButton();
    });

    elements.videoProgressBar.addEventListener('click', seekVideo);
    elements.volumeBtn.addEventListener('click', toggleMute);
    elements.volumeSlider.addEventListener('click', setVolume);

    elements.prevEpisodeBtn.addEventListener('click', () => changeEpisode(-1));
    elements.nextEpisodeBtn.addEventListener('click', () => changeEpisode(1));

    elements.subtitleBtn.addEventListener('click', () => showToast('Subtitles toggled'));
    elements.theaterBtn.addEventListener('click', toggleTheaterMode);
    elements.fullscreenBtn.addEventListener('click', toggleFullscreen);

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (!elements.videoModal.classList.contains('active')) return;

        switch(e.key) {
            case ' ':
                e.preventDefault();
                togglePlay();
                break;
            case 'ArrowRight':
                elements.mainVideo.currentTime += 10;
                break;
            case 'ArrowLeft':
                elements.mainVideo.currentTime -= 10;
                break;
            case 'ArrowUp':
                e.preventDefault();
                elements.mainVideo.volume = Math.min(1, elements.mainVideo.volume + 0.1);
                updateVolumeUI();
                break;
            case 'ArrowDown':
                e.preventDefault();
                elements.mainVideo.volume = Math.max(0, elements.mainVideo.volume - 0.1);
                updateVolumeUI();
                break;
            case 'f':
                toggleFullscreen();
                break;
            case 't':
                toggleTheaterMode();
                break;
        }
    });
}

function openVideoPlayer(movie) {
    state.currentMovie = movie;
    state.currentEpisode = 1;

    elements.videoTitle.textContent = movie.title;
    elements.mainVideo.poster = movie.backdrop || movie.poster;

    // Generate episodes for TV series
    if (movie.episodes) {
        elements.episodeList.innerHTML = Array.from({ length: movie.episodes }, (_, i) => `
            <div class="episode-item ${i === 0 ? 'active' : ''}" data-episode="${i + 1}">
                <span>Episode ${i + 1}</span>
                <span>${Math.floor(Math.random() * 20 + 40)} min</span>
            </div>
        `).join('');

        elements.episodeList.querySelectorAll('.episode-item').forEach(item => {
            item.addEventListener('click', () => {
                state.currentEpisode = parseInt(item.dataset.episode);
                updateEpisodeUI();
                showToast(`Playing Episode ${state.currentEpisode}`);
            });
        });

        document.querySelector('.episode-selector').style.display = 'block';
    } else {
        document.querySelector('.episode-selector').style.display = 'none';
    }

    elements.videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Auto play
    setTimeout(() => {
        elements.mainVideo.play().catch(() => {
            // Autoplay blocked, show play button
        });
    }, 500);
}

function closeVideoPlayer() {
    elements.videoModal.classList.remove('active');
    document.body.style.overflow = '';
    elements.mainVideo.pause();
    elements.mainVideo.currentTime = 0;
    state.isPlaying = false;
    updatePlayButton();

    if (state.isTheaterMode) {
        toggleTheaterMode();
    }
}

function togglePlay() {
    if (elements.mainVideo.paused) {
        elements.mainVideo.play();
        state.isPlaying = true;
    } else {
        elements.mainVideo.pause();
        state.isPlaying = false;
    }
    updatePlayButton();
}

function updatePlayButton() {
    const icon = state.isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    elements.playPauseBtn.innerHTML = icon;
    elements.videoPlayBtn.innerHTML = icon;

    if (state.isPlaying) {
        elements.videoOverlay.classList.add('hidden');
    } else {
        elements.videoOverlay.classList.remove('hidden');
    }
}

function updateProgress() {
    const progress = (elements.mainVideo.currentTime / elements.mainVideo.duration) * 100;
    elements.videoProgress.style.width = `${progress}%`;
    elements.videoProgressHandle.style.left = `${progress}%`;
    elements.currentTime.textContent = formatTime(elements.mainVideo.currentTime);
}

function updateDuration() {
    elements.totalTime.textContent = formatTime(elements.mainVideo.duration);
}

function seekVideo(e) {
    const rect = elements.videoProgressBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    elements.mainVideo.currentTime = pos * elements.mainVideo.duration;
}

function toggleMute() {
    elements.mainVideo.muted = !elements.mainVideo.muted;
    const icon = elements.mainVideo.muted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
    elements.volumeBtn.innerHTML = icon;
    updateVolumeUI();
}

function setVolume(e) {
    const rect = elements.volumeSlider.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    elements.mainVideo.volume = Math.max(0, Math.min(1, pos));
    updateVolumeUI();
}

function updateVolumeUI() {
    const volume = elements.mainVideo.muted ? 0 : elements.mainVideo.volume;
    elements.volumeLevel.style.width = `${volume * 100}%`;
}

function changeEpisode(direction) {
    if (!state.currentMovie.episodes) return;

    const newEpisode = state.currentEpisode + direction;
    if (newEpisode >= 1 && newEpisode <= state.currentMovie.episodes) {
        state.currentEpisode = newEpisode;
        updateEpisodeUI();
        showToast(`Playing Episode ${state.currentEpisode}`);
    }
}

function updateEpisodeUI() {
    elements.episodeList.querySelectorAll('.episode-item').forEach((item, index) => {
        item.classList.toggle('active', index + 1 === state.currentEpisode);
    });
    elements.videoTitle.textContent = `${state.currentMovie.title} - Episode ${state.currentEpisode}`;
}

function toggleTheaterMode() {
    state.isTheaterMode = !state.isTheaterMode;
    document.body.classList.toggle('theater-mode', state.isTheaterMode);
    elements.theaterBtn.innerHTML = state.isTheaterMode ? 
        '<i class="fas fa-compress-arrows-alt"></i>' : 
        '<i class="fas fa-expand-arrows-alt"></i>';
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        elements.videoModal.requestFullscreen().catch(err => {
            showToast('Fullscreen not supported');
        });
        elements.fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
    } else {
        document.exitFullscreen();
        elements.fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
    }
}

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ============================================
// SCROLL EFFECTS
// ============================================
function initScrollEffects() {
    // Scroll reveal
    const revealElements = document.querySelectorAll('.movie-section, .genres-section');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal', 'active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });
}

// ============================================
// BACK TO TOP
// ============================================
function initBackToTop() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            elements.backToTop.classList.add('visible');
        } else {
            elements.backToTop.classList.remove('visible');
        }
    });

    elements.backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// NEWSLETTER
// ============================================
function initNewsletter() {
    elements.newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input').value;
        showToast(`Thank you for subscribing with ${email}!`);
        e.target.reset();
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function showToast(message) {
    // Remove existing toast
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%) translateY(20px);
        background: linear-gradient(135deg, var(--primary), var(--primary-light));
        color: white;
        padding: 1rem 2rem;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-weight: 600;
        box-shadow: 0 10px 30px rgba(10, 132, 255, 0.3);
        z-index: 5000;
        opacity: 0;
        transition: all 0.3s ease;
    `;

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(20px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// FAB click handler
elements.fab.addEventListener('click', () => {
    showToast('Quick actions coming soon!');
});
