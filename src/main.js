import './styles/index.css';
import { initScrollAnimations } from './components/animations.js';
import { initSmoothScroll } from './utils/scroll.js';
import { initThemeToggle } from './components/theme.js';
import { initSidebar } from './components/sidebar.js';

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initScrollAnimations();
  initSmoothScroll();
  initSidebar();
});
