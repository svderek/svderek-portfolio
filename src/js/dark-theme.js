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
    }
    document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const root = document.documentElement;
    if (savedTheme) {
        root.setAttribute('data-theme', savedTheme);
    } else {
        root.setAttribute('data-theme', 'light');
    }
});

document
    .querySelector('#themeToggleButton')
    .addEventListener('click', toggleTheme);
