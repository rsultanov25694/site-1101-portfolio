# Portfolio Website

Personal portfolio website project for the course "Principles of Info Systems"

## Running the Website locally

This website uses JavaScript's `fetch()` API to load reusable components, which requires a local web server. You cannot open the HTML files directly in a browser due to CORS restrictions.

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/pages/index.html` in your browser.

## Project Structure

```
portfolio/
├── assets/             # Images
├── pages/              # HTML pages
│   ├── index.html      # Home page
│   ├── about.html      # About page with skills
│   ├── projects.html  # Projects showcase
│   └── hobbies.html   # Hobbies and interests
├── js/                 # JavaScript files
│   ├── config.js      # Centralized configuration for social links
│   └── script.js      # Main JavaScript functionality
├── components/         # Reusable HTML components
│   ├── nav.html       # Navigation component
│   ├── footer.html    # Footer component
│   └── loader.js      # Component loader
├── styles.css         # All styling
└── README.md          # This file
```

## Features

- Responsive design
- Reusable components (DRY principle)
- Centralized configuration
- Smooth animations
- Mobile-friendly navigation
