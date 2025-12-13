# Personal Portfolio

A modern, responsive portfolio website built with Vite and vanilla JavaScript.

## Live Demo

[roycs-portfolio.vercel.app](#)

## Features

- Responsive design that works on all devices
- Dark/Light theme toggle with persistent preference
- Smooth scroll-triggered animations
- Clean, professional aesthetic
- Accessible: semantic HTML, ARIA labels, keyboard navigation
- Fast performance with Vite build system

## Tech Stack

- **Build Tool:** Vite
- **Styling:** Vanilla CSS with CSS Custom Properties
- **JavaScript:** ES6+ modules
- **Fonts:** Inter (Google Fonts)

## Project Structure

```
portfolio/
├── index.html
├── public/
├── src/
│   ├── main.js
│   ├── components/
│   │   ├── animations.js
│   │   └── theme.js
│   ├── utils/
│   │   └── scroll.js
│   └── styles/
│       ├── index.css
│       ├── variables.css
│       ├── global.css
│       └── components/
└── vite.config.js
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/RoyCoding8/portfolio.git
cd portfolio
npm install
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project at vercel.com
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Drag `dist` folder to netlify.com

### GitHub Pages
```bash
npm install -D gh-pages
npm run build
npx gh-pages -d dist
```

## Customization

### Update Content
Edit `index.html` to change name, bio, education, experience, achievements, and contact info.

### Change Colors
Edit `src/styles/variables.css`:
```css
--color-accent-primary: #6366f1;
--color-accent-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
```

## License

Apache 2.0

---

Shashwata Roy
