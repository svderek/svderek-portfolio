function updateButtonIcon() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const themeIcon = document.getElementById('themeIcon');


  const lightIconPath = './img/light-theme-btn.svg';
  const darkIconPath = './img/dark-theme-btn.svg';


  if (currentTheme === 'light') {
    themeIcon.src = lightIconPath;
    themeIcon.alt = 'Switch to dark theme';
  } else {
    themeIcon.src = darkIconPath;
    themeIcon.alt = 'Switch to light theme';
  }
}

function toggleTheme() {
  const root = document.documentElement;
  const currentTheme = root.getAttribute('data-theme');

  if (currentTheme === 'light') {
    root.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    root.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }

  updateButtonIcon();
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const root = document.documentElement;

  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  } else {
    root.setAttribute('data-theme', 'light');
  }

  updateButtonIcon();
});

document
  .querySelector('#themeToggleButton')
  .addEventListener('click', toggleTheme);
