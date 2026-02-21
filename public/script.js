class StarkPortfolio {
    constructor() {
        this.init();
    }

    init() {
        this.setupSmoothScrolling();
        this.setupNavigationEffects();
        this.setupScrollAnimations();
        this.setupArcReactorEffect();
    }

    // Smooth scrolling for navigation links
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Navigation background effects on scroll
    setupNavigationEffects() {
        const nav = document.querySelector('.navbar');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                nav.style.background = 'linear-gradient(90deg, rgba(0,0,0,0.98) 0%, rgba(20,20,20,0.98) 100%)';
            } else {
                nav.style.background = 'linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(20,20,20,0.95) 100%)';
            }
        });
    }

    // Intersection Observer for scroll animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);

        // Add animation class and observe elements
        document.querySelectorAll('.skill-card, .project-card').forEach(card => {
            card.classList.add('animate-on-scroll');
            observer.observe(card);
        });
    }

    // Arc reactor glow effect
    setupArcReactorEffect() {
        const arcReactor = document.querySelector('.arc-reactor');
        let glowIntensity = 0.03;
        
        setInterval(() => {
            glowIntensity = 0.03 + Math.random() * 0.02;
            arcReactor.style.opacity = glowIntensity;
        }, 2000);
    }
}

// Initialize the portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new StarkPortfolio();
});

// Utility functions
const Utils = {
    // Debounce function for performance optimization
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Check if element is in viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { StarkPortfolio, Utils };
}