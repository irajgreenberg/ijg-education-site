const masthead = document.querySelector('.masthead');
const themeToggle = document.querySelector('.theme-toggle');
const themeToggleGlyph = document.querySelector('.theme-toggle-glyph');
const root = document.documentElement;
const THEME_KEY = 'ijg-education-theme';

if (masthead) {
  const syncScrollState = () => {
    masthead.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  syncScrollState();
  window.addEventListener('scroll', syncScrollState, { passive: true });
}

const setTheme = (theme) => {
  root.dataset.theme = theme;

  if (themeToggle) {
    const nextLabel = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    themeToggle.setAttribute('aria-label', nextLabel);
    themeToggle.setAttribute('title', nextLabel);
  }

  if (themeToggleGlyph) {
    themeToggleGlyph.textContent = theme === 'dark' ? '◌' : '◐';
  }
};

const savedTheme = window.localStorage.getItem(THEME_KEY);
const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (preferredDark ? 'dark' : 'light');
setTheme(initialTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    window.localStorage.setItem(THEME_KEY, nextTheme);
    setTheme(nextTheme);
  });
}
