// DOM Elements
const cursorFollower = document.querySelector('.cursor-follower');
const experienceCards = document.querySelectorAll('.experience-card');
const navLinks = document.querySelectorAll('.nav-link');
const exploreBtn = document.querySelector('.explore-btn');
const gameTiles = document.querySelectorAll('.game-tile');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initCursorFollower();
    initNavigation();
    initCardHoverEffects();
    initGameLoading();
    loadNewsArticles();
    loadFacts();
    initScrollAnimations();
    initDynamicBackground();
    scheduleNewsRefresh();
    initLogoStyle();
});

// Initialize logo style with Verdana font
function initLogoStyle() {
    const logos = document.querySelectorAll('.logo-brand, .footer-brand h3');
    logos.forEach(logo => {
        logo.style.fontFamily = "'Verdana', sans-serif";
        logo.style.fontWeight = "bold";
        logo.style.fontSize = "1.8rem";
    });
}

// Dynamic background changer
function initDynamicBackground() {
    const backgrounds = ['bg-blue', 'bg-purple', 'bg-green', 'bg-pink', 'bg-yellow', 'bg-orange'];
    let currentIndex = 0;
    
    setInterval(() => {
        document.body.className = document.body.className.replace(/bg-\w+/g, '');
        document.body.classList.add(backgrounds[currentIndex]);
        currentIndex = (currentIndex + 1) % backgrounds.length;
    }, 30000); // Change every 30 seconds
}

// Schedule news refresh every hour
function scheduleNewsRefresh() {
    // Refresh news every hour (3600000 ms)
    setInterval(loadNewsArticles, 3600000);
    
    // Also refresh facts periodically
    setInterval(loadFacts, 1800000); // Every 30 minutes
}

// Cursor Follower Effect
function initCursorFollower() {
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        cursorFollower.style.left = `${x}px`;
        cursorFollower.style.top = `${y}px`;
        
        // Add scaling effect on interactive elements
        const target = e.target;
        if (target.closest('button, .experience-card, .game-tile, .news-article')) {
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.borderColor = '#6366f1';
        } else {
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.borderColor = '#6366f1';
        }
    });
    
    // Mouse leave effect
    document.addEventListener('mouseleave', () => {
        cursorFollower.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        cursorFollower.style.opacity = '1';
    });
}

// Navigation Effects
function initNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
    
    exploreBtn.addEventListener('click', () => {
        scrollToSection('games');
    });
}

// Card Hover Effects
function initCardHoverEffects() {
    experienceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Game Loading
function initGameLoading() {
    gameTiles.forEach(tile => {
        tile.addEventListener('click', () => {
            const gameType = tile.getAttribute('onclick').match(/'([^']+)'/)[1];
            loadGame(gameType);
        });
    });
}

// Load Game
function loadGame(gameType) {
    const gameContainer = document.getElementById('game-container');
    
    // Show loading state
    gameContainer.innerHTML = `
        <div class="loading-state">
            <div class="loading-spinner"></div>
            <p>Loading ${getGameName(gameType)}...</p>
        </div>
    `;
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        switch(gameType) {
            case 'tic-tac-toe':
                gameContainer.innerHTML = `
                    <iframe src="games/tic-tac-toe.html" 
                            width="100%" 
                            height="600px" 
                            frameborder="0" 
                            style="border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);">
                    </iframe>
                    <button class="back-to-gallery" onclick="showGameGallery()">
                        ← Back to Games
                    </button>
                `;
                break;
                
            case 'racing':
                gameContainer.innerHTML = `
                    <iframe src="games/racing.html" 
                            width="100%" 
                            height="650px" 
                            frameborder="0" 
                            style="border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);">
                    </iframe>
                    <button class="back-to-gallery" onclick="showGameGallery()">
                        ← Back to Games
                    </button>
                `;
                break;
                
            case 'sudoku':
                gameContainer.innerHTML = `
                    <iframe src="games/sudoku.html" 
                            width="100%" 
                            height="700px" 
                            frameborder="0" 
                            style="border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);">
                    </iframe>
                    <button class="back-to-gallery" onclick="showGameGallery()">
                        ← Back to Games
                    </button>
                `;
                break;
                
            default:
                gameContainer.innerHTML = `
                    <div class="game-placeholder">
                        <i class="fas fa-gamepad"></i>
                        <h3>Select a game to begin your journey</h3>
                        <p>Choose from our curated collection of AI-powered experiences</p>
                    </div>
                `;
        }
    }, 800);
}

// Show game gallery
function showGameGallery() {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = `
        <div class="game-placeholder">
            <i class="fas fa-gamepad"></i>
            <h3>Select a game to begin your journey</h3>
            <p>Choose from our curated collection of AI-powered experiences</p>
        </div>
    `;
}

// Get game name for display
function getGameName(gameType) {
    const names = {
        'tic-tac-toe': 'Tic Tac eigur',
        'racing': 'eigurRacer',
        'sudoku': 'Sudoku eigur'
    };
    return names[gameType] || 'Game';
}

// Load News Articles
function loadNewsArticles() {
    const newsContainer = document.getElementById('news-container');
    
    // Mock news data with clickable links (will be updated hourly)
    const newsArticles = [
        {
            category: 'Technology',
            title: 'AI Revolution: New Breakthrough in Neural Networks',
            excerpt: 'Scientists have discovered revolutionary techniques that could change how AI processes information.',
            source: 'Tech Insights',
            time: new Date().toLocaleTimeString(),
            link: '#'
        },
        {
            category: 'Science',
            title: 'Quantum Computing Milestone Achieved',
            excerpt: 'Researchers have reached a significant milestone in quantum computing, bringing us closer to practical applications.',
            source: 'Science Daily',
            time: new Date().toLocaleTimeString(),
            link: '#'
        },
        {
            category: 'World',
            title: 'Global Climate Summit Results',
            excerpt: 'Important agreements reached at the international climate summit could reshape environmental policies worldwide.',
            source: 'Global News',
            time: new Date().toLocaleTimeString(),
            link: '#'
        },
        {
            category: 'Finance',
            title: 'Cryptocurrency Market Trends',
            excerpt: 'Analysis of current market trends reveals new opportunities for investors in the digital asset space.',
            source: 'Finance Times',
            time: new Date().toLocaleTimeString(),
            link: '#'
        },
        {
            category: 'Health',
            title: 'Medical Advancement in Treatment',
            excerpt: 'Breakthrough research shows promising results for treating previously incurable conditions.',
            source: 'Health Journal',
            time: new Date().toLocaleTimeString(),
            link: '#'
        },
        {
            category: 'Sports',
            title: 'Championship Finals Preview',
            excerpt: 'Preview of upcoming championship finals with expert analysis and predictions.',
            source: 'Sports Central',
            time: new Date().toLocaleTimeString(),
            link: '#'
        }
    ];
    
    newsContainer.innerHTML = '';
    
    newsArticles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.className = 'news-article';
        articleElement.innerHTML = `
            <div class="news-thumbnail">${getCategoryIcon(article.category)}</div>
            <div class="news-content">
                <span class="news-category">${article.category}</span>
                <h3 class="news-title">${article.title}</h3>
                <p class="news-excerpt">${article.excerpt}</p>
                <div class="news-meta">
                    <span>${article.source}</span>
                    <span>${article.time}</span>
                </div>
                <a href="${article.link}" class="read-more">Read Full Story →</a>
            </div>
        `;
        
        // Add click event to make it truly clickable
        articleElement.addEventListener('click', (e) => {
            if (!e.target.classList.contains('read-more')) {
                window.open(article.link, '_blank');
            }
        });
        
        newsContainer.appendChild(articleElement);
    });
}

// Get category icon
function getCategoryIcon(category) {
    const icons = {
        'Technology': '💻',
        'Science': '🔬',
        'World': '🌍',
        'Finance': '💰',
        'Health': '🏥',
        'Sports': '⚽'
    };
    return icons[category] || '📰';
}

// Load Facts
function loadFacts() {
    const factsContainer = document.getElementById('facts-container');
    
    const facts = [
        {
            category: 'Science',
            content: 'Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.'
        },
        {
            category: 'Technology',
            content: 'The first computer bug was an actual insect found in a computer in 1947 by Grace Hopper.'
        },
        {
            category: 'Nature',
            content: 'Octopuses have three hearts and blue blood.'
        },
        {
            category: 'Space',
            content: 'One day on Venus is longer than one year on Venus.'
        },
        {
            category: 'History',
            content: 'The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.'
        },
        {
            category: 'Human Body',
            content: 'Your stomach has to produce a new layer of mucus every two weeks or it will digest itself.'
        }
    ];
    
    factsContainer.innerHTML = '';
    
    facts.forEach(fact => {
        const factElement = document.createElement('div');
        factElement.className = 'fact-card';
        factElement.innerHTML = `
            <span class="fact-category">${fact.category}</span>
            <p class="fact-content">${fact.content}</p>
        `;
        
        factsContainer.appendChild(factElement);
    });
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Initialize scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    document.querySelectorAll('.experience-card, .game-tile, .news-article, .fact-card').forEach(el => {
        observer.observe(el);
    });
}

// Utility function to handle section switching
document.querySelectorAll('.experience-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
        showSection(category);
    });
});

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
        selectedSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add back button styles to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    .back-to-gallery {
        margin-top: 20px;
        padding: 12px 24px;
        background: var(--primary);
        color: white;
        border: none;
        border-radius: var(--radius-md);
        cursor: pointer;
        font-size: 1rem;
        transition: all var(--transition-fast);
    }
    
    .back-to-gallery:hover {
        background: var(--primary-dark);
        transform: translateY(-2px);
        box-shadow: var(--shadow-md);
    }
    
    .loading-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px;
    }
    
    .loading-spinner {
        width: 40px;
        height: 40px;
        border: 4px solid rgba(99, 102, 241, 0.2);
        border-top: 4px solid var(--primary);
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-bottom: 16px;
    }
    
    /* Verdana font for logo */
    .logo-brand, .footer-brand h3 {
        font-family: 'Verdana', sans-serif !important;
        font-weight: bold !important;
        font-size: 1.8rem !important;
    }
`;
document.head.appendChild(style);

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});