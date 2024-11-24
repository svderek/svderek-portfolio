const themeButton = document.getElementById('themeToggleButton');
const buttonIcon = document.getElementById('buttonIcon');

function updateTheme(theme) {
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  const newIcon =
    theme === 'light' ? '../img/light-theme-btn.svg' : '../img/dark-theme-btn.svg';
  buttonIcon.classList.add('fade-out');
  setTimeout(() => {
    buttonIcon.src = newIcon;
    buttonIcon.classList.remove('fade-out');
    buttonIcon.classList.add('fade-in');
    setTimeout(() => buttonIcon.classList.remove('fade-in'), 300);
  }, 300);
}


function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  updateTheme(newTheme);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  updateTheme(savedTheme);


  themeButton.addEventListener('click', toggleTheme);
});
