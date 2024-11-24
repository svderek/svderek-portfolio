const themeButton = document.getElementById('themeToggleButton');
const themeIconUse = document.getElementById('buttonIcon'); 

function toggleTheme() {
  const root = document.documentElement;
  const currentTheme = root.getAttribute('data-theme') || 'light';

  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  const newIconHref =
    newTheme === 'light'
      ? './img/theme-switch.svg#icon-light-theme-btn'
      : './img/theme-switch.svg#icon-dark-theme-btn';
  themeIconUse.setAttribute('href', newIconHref);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const root = document.documentElement;
  root.setAttribute('data-theme', savedTheme);

  const initialIconHref =
    savedTheme === 'light'
      ? './img/theme-switch.svg#icon-light-theme-btn'
      : './img/theme-switch.svg#icon-dark-theme-btn';
  themeIconUse.setAttribute('href', initialIconHref);

  themeButton.addEventListener('click', toggleTheme);
});
