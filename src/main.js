// Main JavaScript Entry Point
import './styles/index.css';
import { initScrollAnimations } from './components/animations.js';
import { initSmoothScroll } from './utils/scroll.js';
import { initThemeToggle } from './components/theme.js';

// Initialize on DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initScrollAnimations();
  initSmoothScroll();

  console.log('✨ Portfolio initialized successfully!');
});
