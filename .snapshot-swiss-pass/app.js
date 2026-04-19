const masthead = document.querySelector('.masthead');

if (masthead) {
  const syncScrollState = () => {
    masthead.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  syncScrollState();
  window.addEventListener('scroll', syncScrollState, { passive: true });
}
