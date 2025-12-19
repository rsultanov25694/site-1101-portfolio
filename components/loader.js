// Component loader - loads reusable HTML components
async function loadComponent(componentName) {
    try {
        const response = await fetch(`../components/${componentName}.html`);
        if (!response.ok) {
            throw new Error(`Failed to load ${componentName}: ${response.status}`);
        }
        const html = await response.text();
        if (!html || html.trim() === '') {
            throw new Error(`Component ${componentName} is empty`);
        }
        return html;
    } catch (error) {
        console.error(`Error loading component ${componentName}:`, error);
        console.warn(`Make sure you're running the site from a web server (not file://). Use: python -m http.server 8000 or similar.`);
        return '';
    }
}

// Load navigation
async function loadNavigation() {
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (!navPlaceholder) {
        console.warn('nav-placeholder not found');
        return;
    }
    
    const navHtml = await loadComponent('nav');
    if (navHtml) {
        navPlaceholder.outerHTML = navHtml;
        console.log('Navigation loaded successfully');
    } else {
        console.error('Failed to load navigation component');
    }
}

// Load footer
async function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) {
        console.warn('footer-placeholder not found');
        return;
    }
    
    const footerHtml = await loadComponent('footer');
    if (footerHtml) {
        footerPlaceholder.outerHTML = footerHtml;
        // Update social links with config
        updateSocialLinks();
        console.log('Footer loaded successfully');
    } else {
        console.error('Failed to load footer component');
    }
}

// Update social links with URLs from config
function updateSocialLinks() {
    if (typeof CONFIG === 'undefined') return;
    
    // Update footer social links
    const footerGithubLink = document.querySelector('.footer-social-links [data-social="github"]');
    const footerCodecademyLink = document.querySelector('.footer-social-links [data-social="codecademy"]');
    
    if (footerGithubLink && CONFIG.social.github) {
        footerGithubLink.href = CONFIG.social.github;
    }
    if (footerCodecademyLink && CONFIG.social.codecademy) {
        footerCodecademyLink.href = CONFIG.social.codecademy;
    }
    
    // Update about page social links
    const aboutGithubLink = document.querySelector('.social-links [data-social="github"]');
    const aboutCodecademyLink = document.querySelector('.social-links [data-social="codecademy"]');
    
    if (aboutGithubLink && CONFIG.social.github) {
        aboutGithubLink.href = CONFIG.social.github;
    }
    if (aboutCodecademyLink && CONFIG.social.codecademy) {
        aboutCodecademyLink.href = CONFIG.social.codecademy;
    }
}

// Initialize components on page load
document.addEventListener('DOMContentLoaded', async () => {
    // Load components
    await loadNavigation();
    await loadFooter();
    
    // Trigger initialization event for script.js to handle
    window.dispatchEvent(new CustomEvent('componentsLoaded'));
});

