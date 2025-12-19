// Reset hamburger menu animation
function resetHamburgerMenu(menuToggle) {
    if (!menuToggle) return;
    const spans = menuToggle.querySelectorAll('span');
    if (spans) {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

// Animate hamburger menu to X
function animateHamburgerMenu(menuToggle) {
    if (!menuToggle) return;
    const spans = menuToggle.querySelectorAll('span');
    if (spans) {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
    }
}

// Initialize mobile menu functionality
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!menuToggle || !navMenu) return;
    
    // Remove existing listeners by cloning and replacing
    const newToggle = menuToggle.cloneNode(true);
    menuToggle.parentNode.replaceChild(newToggle, menuToggle);
    
    newToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        if (navMenu.classList.contains('active')) {
            animateHamburgerMenu(newToggle);
        } else {
            resetHamburgerMenu(newToggle);
        }
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            resetHamburgerMenu(newToggle);
        });
    });
}

// Set active navigation link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        const linkPage = link.getAttribute('data-page');
        
        if (linkHref === currentPage || linkPage === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Navbar background on scroll - initialize after components load
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
            } else {
                navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
            }
        });
    }
}

// Smooth scroll for anchor links (only if on same page)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').substring(1);
        const target = document.querySelector(`#${targetId}`);
        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe skill cards, project cards, and hobby cards
document.querySelectorAll('.skill-card, .project-card, .hobby-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Initialize navigation after components are loaded
window.addEventListener('componentsLoaded', () => {
    setActiveNavLink();
    initMobileMenu();
    initNavbarScroll();
});

// Also try to initialize on DOMContentLoaded in case components load synchronously
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure components are loaded
    setTimeout(() => {
        if (document.querySelector('.nav-menu')) {
            setActiveNavLink();
            initMobileMenu();
            initNavbarScroll();
        }
    }, 100);
});

