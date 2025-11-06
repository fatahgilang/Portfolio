# Personal Portfolio

This is a personal portfolio website built with React, Vite, and TailwindCSS.

## Features

- Responsive design
- Dark/light theme toggle
- Animated text typing
- Smooth animations and transitions
- Project showcase
- Contact form

## Deployment to GitHub Pages

To fix the blank white page issue when deploying to GitHub Pages, I've made the following changes:

1. Updated the `vite.config.ts` base path to `./` for relative paths
2. Fixed asset paths in `public/index.html`
3. Added a GitHub Actions workflow for automatic deployment
4. Added a deploy script to `package.json`

### Manual Deployment Steps

1. Update the `homepage` field in `package.json`:
   ```json
   "homepage": "https://<your-github-username>.github.io/<your-repo-name>"
   ```
   Replace `<your-github-username>` with your actual GitHub username and `<your-repo-name>` with your repository name.

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

### Automatic Deployment with GitHub Actions

The project includes a GitHub Actions workflow that automatically deploys your site when you push to the main branch.

To use this:

1. Go to your repository settings on GitHub
2. Navigate to Pages settings
3. Select "GitHub Actions" as the source

The site will now automatically deploy whenever you push changes to the main branch.

## Development

- Run development server: `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run preview`
