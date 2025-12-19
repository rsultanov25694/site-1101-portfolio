# Portfolio Website

Personal portfolio website project for the course "Principles of Info Systems"

## Running the Website

This website uses JavaScript's `fetch()` API to load reusable components, which requires a local web server. You cannot open the HTML files directly in a browser due to CORS restrictions.

### Quick Start

Run one of these commands in the project directory:

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js (if you have http-server installed):**
```bash
npx http-server
```

Then open `http://localhost:8000/index.html` in your browser.

## Project Structure

- `index.html` - Home page
- `about.html` - About page with skills
- `projects.html` - Projects showcase
- `hobbies.html` - Hobbies and interests
- `components/` - Reusable HTML components (navigation, footer)
- `config.js` - Centralized configuration for social links
- `script.js` - Main JavaScript functionality
- `styles.css` - All styling

## Features

- Responsive design
- Reusable components (DRY principle)
- Centralized configuration
- Smooth animations
- Mobile-friendly navigation
