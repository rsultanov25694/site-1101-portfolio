# Portfolio Website

Personal portfolio website project for the course "Principles of Info Systems". It's deployed in https://rsultanov25694.github.io/site-1101-portfolio/index.html

## Running the Website Locally

This website uses JavaScript's `fetch()` API to load reusable components, which requires a local web server. You cannot open the HTML files directly in a browser due to CORS restrictions.

- From project root, execute:
```bash
python -m http.server 8000
```
- Then open `http://localhost:8000/docs/index.html` in your browser.

## Project Structure

```
portfolio/
├── docs/                    # GitHub Pages deployment folder
│   ├── index.html          # Home page (entry point for GitHub Pages)
│   ├── about.html          # About page with skills
│   ├── projects.html      # Projects showcase
│   ├── hobbies.html        # Hobbies and interests
│   ├── styles.css          # All styling
│   ├── js/                 # JavaScript files
│   │   ├── config.js      # Centralized configuration for all links
│   │   └── script.js      # Main JavaScript functionality
│   ├── components/         # Reusable HTML components
│   │   ├── nav.html       # Navigation component
│   │   ├── footer.html    # Footer component
│   │   └── loader.js      # Component loader
│   └── assets/            # Images and media files
│       └── profile_image.png
│
├── pages/                   # Development HTML pages (original structure)
│   ├── index.html
│   ├── about.html
│   ├── projects.html
│   └── hobbies.html
├── js/                      # Development JavaScript files
│   ├── config.js
│   └── script.js
├── components/              # Development components
│   ├── nav.html
│   ├── footer.html
│   └── loader.js
├── assets/                  # Development assets
│   └── profile_image.png
├── styles.css               # Development styles
└── README.md                # This file
```

## Deployment

The website is configured to be hosted on GitHub Pages using the `/docs` folder. See [documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)


## Features

- Responsive design
- Reusable components (DRY principle)
- Centralized configuration (all links in `js/config.js`)
- Smooth animations
- Mobile-friendly navigation
- GitHub Pages ready
