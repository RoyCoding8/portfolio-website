# Personal Portfolio

A modern, responsive portfolio website built with Vite and vanilla JavaScript.

## 🚀 Live Demo 
*https://my-portfolio-five-sigma-oj5g4xnpwm.vercel.app/*

## ✨ Features

- **Responsive Design** - Works on all devices
- **Dark/Light Theme** - Toggle with persistent preference
- **Smooth Animations** - Scroll-triggered fade effects
- **Professional Aesthetic** - Clean, modern design inspired by Stripe/Linear
- **Accessible** - Semantic HTML, ARIA labels, keyboard navigation
- **Fast** - Vite-powered, minimal dependencies

## 🛠️ Tech Stack

- **Build Tool:** Vite
- **Styling:** Vanilla CSS with CSS Custom Properties
- **JavaScript:** Vanilla JS (ES6+)
- **Fonts:** Inter (Google Fonts)

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML
├── public/             # Static assets
├── src/
│   ├── main.js         # Entry point
│   ├── components/     # JS modules
│   │   ├── animations.js
│   │   └── theme.js
│   ├── utils/
│   │   └── scroll.js
│   └── styles/
│       ├── index.css   # Main stylesheet
│       ├── variables.css
│       ├── global.css
│       └── components/ # Component styles
└── vite.config.js
```

## 🏃 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/RoyCoding8/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview  # Preview the build
```

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Drag `dist` folder to [netlify.com](https://netlify.com)

### GitHub Pages
```bash
npm install -D gh-pages
npm run build
npx gh-pages -d dist
```

## 📝 Customization

### Update Content
Edit `index.html` to change:
- Name and bio
- Education details
- Experience/projects
- Achievements
- Contact info

### Change Colors
Edit `src/styles/variables.css`:
```css
--color-accent-primary: #6366f1;
--color-accent-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
```

## 📄 License

MIT License - feel free to use this template for your own portfolio.

---

Built with ❤️ by Shashwata Roy
