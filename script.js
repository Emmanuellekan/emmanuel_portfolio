document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  function updateThemeButton() {
    const isDarkMode = body.classList.contains('dark-mode');
    themeToggleBtn.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    themeToggleBtn.setAttribute('aria-pressed', isDarkMode);
  }

  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
  }

  updateThemeButton();

  themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem(
      'theme',
      body.classList.contains('dark-mode') ? 'dark' : 'light'
    );
    updateThemeButton();
  });

  const pageLinks = document.querySelectorAll('a[href^="#"]');

  pageLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
