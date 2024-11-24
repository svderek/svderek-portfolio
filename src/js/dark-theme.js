function getLightSVG() {
  return `
    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="24" rx="12" fill="#E4E5E6"/>
      <circle cx="12" cy="12" r="10" fill="#00B068"/>
    </svg>
  `;
}

function getDarkSVG() {
  return `
    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="24" rx="12" fill="#292929"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M32 21.1679C35.5318 19.6248 38 16.1006 38 12C38 7.89936 35.5318 4.3752 32 2.83209C33.2249 2.29689 34.5778 2 36 2C41.5228 2 46 6.47715 46 12C46 17.5228 41.5228 22 36 22C34.5778 22 33.2249 21.7031 32 21.1679Z" fill="#00B068"/>
    </svg>
  `;
}

function updateButtonIcon() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const themeIcon = document.getElementById('themeIcon');

  themeIcon.innerHTML = currentTheme === 'light' ? getLightSVG() : getDarkSVG();
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
