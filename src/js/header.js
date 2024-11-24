document.addEventListener('DOMContentLoaded', () => {
    const aboutMeSection = document.querySelector('#about-me');
    const projectsSection = document.querySelector('#projects');
    const contactsSection = document.querySelector('#work-together');

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
        
            if (link.textContent.includes('About Me')) {
                aboutMeSection.scrollIntoView({ behavior: 'smooth' });
            } else if (link.textContent.includes('Projects')) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            } else if (link.textContent.includes('Contacts')) {
                contactsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
