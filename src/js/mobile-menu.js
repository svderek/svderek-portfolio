document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.querySelector('.burger');
    const closeButton = document.querySelector('.menu-icon-close');
    const mobileMenu = document.querySelector('.mob-menu');
    const menuLinks = document.querySelectorAll('.mob-nav-link');

    function openMenu() {
        mobileMenu.classList.add('is-open');
        burgerButton.hidden = true;
        closeButton.hidden = false;
    }

    function closeMenu() {
        mobileMenu.classList.remove('is-open');
        burgerButton.hidden = false;
        closeButton.hidden = true;
    }

    burgerButton?.addEventListener('click', openMenu);

    closeButton?.addEventListener('click', closeMenu);

    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
