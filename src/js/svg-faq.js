const buttons = document.querySelectorAll('.ac-trigger');

function updateIcons(theme) {
  buttons.forEach((button) => {
    const icon1 = button.querySelector('.icon-1');
    const icon2 = button.querySelector('.icon-2');
    if (icon1) icon1.remove();
    if (icon2) icon2.remove();

  
    const strokeColor = theme === 'dark' ? '#F0F0F0' : '#292929';


    const newIcon1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    newIcon1.setAttribute('class', 'icon-1');
    newIcon1.setAttribute('width', '24');
    newIcon1.setAttribute('height', '24');
    newIcon1.setAttribute('viewBox', '0 0 24 24');
    newIcon1.setAttribute('fill', 'none');
    newIcon1.innerHTML = `
      <path d="M18 9L12 15L6 9" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" />
    `;

    const newIcon2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    newIcon2.setAttribute('class', 'icon-2');
    newIcon2.setAttribute('width', '24');
    newIcon2.setAttribute('height', '24');
    newIcon2.setAttribute('viewBox', '0 0 24 24');
    newIcon2.setAttribute('fill', 'none');
    newIcon2.innerHTML = `
      <path d="M18 15L12 9L6 15" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" />
    `;

    button.appendChild(newIcon1);
    button.appendChild(newIcon2);
  });
}

function getCurrentTheme() {
  const themeAttr = document.documentElement.getAttribute('data-theme');
  return themeAttr || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

const observer = new MutationObserver(() => {
  const currentTheme = getCurrentTheme();
  updateIcons(currentTheme);
});

observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

updateIcons(getCurrentTheme());
