# Devan Schneider - Portfolio Website

A modern, responsive portfolio website built with SvelteKit and Tailwind CSS.

## Features

- 🚀 Built with SvelteKit for optimal performance
- 🎨 Styled with Tailwind CSS for modern design
- 📱 Fully responsive design
- 📄 Static site generation for fast loading
- 🔗 Easy deployment to GitHub Pages

## Pages

- **Home** - Landing page with introduction
- **About** - Personal information and social links
- **Projects** - Portfolio of work and projects
- **Contact** - Contact form and information

## Development
 - Create Pull requests

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone <your-repo-url>
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

To build for production:
```bash
npm run build
```

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

1. **Update Repository Name**: In `svelte.config.js`, replace `YOUR_REPO_NAME` with your actual GitHub repository name.

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

3. **Deploy**: Push to the `main` branch and the site will automatically deploy.

### Manual Deployment

For manual deployment:
```bash
npm run deploy
```

## Project Structure

```
src/
├── routes/
│   ├── +layout.svelte    # Main layout with navigation
│   ├── +page.svelte      # Home page
│   ├── about/
│   │   └── +page.svelte  # About page
│   ├── projects/
│   │   ├── +page.svelte  # Projects listing
│   │   └── [project]/    # Individual project pages
│   └── contact/
│       └── +page.svelte  # Contact page
static/                   # Static assets (images, etc.)
```

## Customization

### Adding Images

Place images in the `static/` directory:
- Profile photo: `static/profile.jpg`
- Project images: `static/project1.jpg`, `static/project2.jpg`, etc.

### Updating Content

- Edit page content in the respective `+page.svelte` files
- Update project information in `src/routes/projects/+page.svelte`
- Modify navigation in `src/routes/+layout.svelte`

## Technologies Used

- [SvelteKit](https://kit.svelte.dev/) - Full-stack web framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool and dev server

## License

MIT License - feel free to use this template for your own portfolio!
