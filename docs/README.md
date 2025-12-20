# GitHub Pages Setup

This folder contains the website files for GitHub Pages hosting.

## Structure

```
docs/
├── index.html          # Home page (entry point)
├── about.html          # About page
├── projects.html       # Projects page
├── hobbies.html        # Hobbies page
├── styles.css          # All styling
├── js/                 # JavaScript files
│   ├── config.js      # Configuration
│   └── script.js      # Main scripts
├── components/         # Reusable components
│   ├── nav.html
│   ├── footer.html
│   └── loader.js
└── assets/            # Images and media
    └── profile_image.png
```

## GitHub Pages Configuration

1. Go to your repository Settings
2. Navigate to "Pages" section
3. Under "Source", select the branch (usually `main` or `master`)
4. Select `/docs` folder from the dropdown
5. Click "Save"

Your site will be available at: `https://<username>.github.io/<repository-name>/`

## Local Testing

To test locally before pushing:

```bash
cd docs
python -m http.server 8000
```

Then open `http://localhost:8000/index.html`

