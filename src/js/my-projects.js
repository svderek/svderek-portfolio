import projectImg11x from '../img/my-projects/project-1.jpg';
import projectImg12x from '../img/my-projects/project-12x.jpg';
import projectImg21x from '../img/my-projects/project-2.jpg';
import projectImg22x from '../img/my-projects/project-22x.jpg';
import projectImg31x from '../img/my-projects/project-3.jpg';
import projectImg32x from '../img/my-projects/project-32x.jpg';
import projectImg41x from '../img/my-projects/project-4.jpg';
import projectImg42x from '../img/my-projects/project-42x.jpg';
import projectImg51x from '../img/my-projects/project-5.jpg';
import projectImg52x from '../img/my-projects/project-52x.jpg';
import projectImg61x from '../img/my-projects/project-6.jpg';
import projectImg62x from '../img/my-projects/project-62x.jpg';
import projectImg71x from '../img/my-projects/project-7.jpg';
import projectImg72x from '../img/my-projects/project-72x.jpg';
import projectImg81x from '../img/my-projects/project-8.jpg';
import projectImg82x from '../img/my-projects/project-82x.jpg';
import projectImg91x from '../img/my-projects/project-9.jpg';
import projectImg92x from '../img/my-projects/project-92x.jpg';
import projectImg101x from '../img/my-projects/project-10.jpg';
import projectImg102x from '../img/my-projects/project-102x.jpg';
import arrowIcon from '../img/icons.svg';

const projects = [
  {
    title: 'Wallet webservice',
    technologies: 'React, JavaScript, Node JS, Git',
    link: 'https://ivndrkk.github.io/portfolio2.0/',
    images: {
      '1x': projectImg51x,
      '2x': projectImg52x,
    },
  },
  {
    title: 'Green harvest webservice',
    technologies: 'React, JavaScript, Node JS, Git',
    link: 'https://ivndrkk.github.io/portfolio2.0/',
    images: {
      '1x': projectImg41x,
      '2x': projectImg42x,
    },
  },
  {
    title: 'English Exellence website',
    technologies: 'React, JavaScript, Node JS, Git',
    link: 'https://ivndrkk.github.io/portfolio2.0/',
    images: {
      '1x': projectImg91x,
      '2x': projectImg92x,
    },
  },
  {
    title: 'Power pulse webservice ',
    technologies: 'React, JavaScript, Node JS, Git',
    link: 'https://ivndrkk.github.io/portfolio2.0/',
    images: {
      '1x': projectImg11x,
      '2x': projectImg12x,
    },
  },
  {
    title: 'Mimino website',
    technologies: 'React, JavaScript, Node JS, Git',
    link: 'https://ivndrkk.github.io/portfolio2.0/',
    images: {
      '1x': projectImg21x,
      '2x': projectImg22x,
    },
  },
  {
    title: 'Fruitbox online store',
    technologies: 'React, JavaScript, Node JS, Git',
    link: 'https://ivndrkk.github.io/portfolio2.0/',
    images: {
      '1x': projectImg81x,
      '2x': projectImg82x,
    },
  },
  {
    title: 'Vyshyvanka vibes Landing Page',
    technologies: 'React, JavaScript, Node JS, Git',
    link: 'https://ivndrkk.github.io/portfolio2.0/',
    images: {
      '1x': projectImg31x,
      '2x': projectImg32x,
    },
  },
  {
    title: 'Сhego jewelry website',
    technologies: 'React, JavaScript, Node JS, Git',
    link: 'https://ivndrkk.github.io/portfolio2.0/',
    images: {
      '1x': projectImg61x,
      '2x': projectImg62x,
    },
  },
  {
    title: 'Energy flow webservice ',
    technologies: 'React, JavaScript, Node JS, Git',
    link: 'https://ivndrkk.github.io/portfolio2.0/',
    images: {
      '1x': projectImg71x,
      '2x': projectImg72x,
    },
  },
  {
    title: 'starlight studio landing page',
    technologies: 'React, JavaScript, Node JS, Git',
    link: 'https://ivndrkk.github.io/portfolio2.0/',
    images: {
      '1x': projectImg101x,
      '2x': projectImg102x,
    },
  },
];

let loadedProjects = 0;
const projectsPerLoad = 3;

const myProjectsList = document.getElementById('myProjectsList');

const loadMoreButton = document.getElementById('load-more-btn');

function createProjectHTML(projects) {
  return `
    <li class="my-projects-item">
      <picture>
        <source
          srcset="
            ${projects.images['1x']} 1x,
            ${projects.images['2x']} 2x
          "
          media="(min-width: 320px)"
        />
        <img
          class="my-projects-img"
          src="${projects.images['1x']}"
          alt="${projects.title}"
        />
      </picture>
      <p class="my-projects-technologies">${projects.technologies}</p>
      <div class="my-projects-card-row">
        <h3 class="my-projects-names">${projects.title}</h3>
        <a class="my-projects-link" href="${projects.link}" target="_blank">
          Visit
          <svg class="icon-arrow" width="24" height="24">
            <use href="${arrowIcon}#icon-up-right-arrow"></use>
          </svg>
        </a>
      </div>
    </li>
  `;
}

function loadMoreProjects() {
  const remainingProjects = projects.length - loadedProjects;
  const projectsToLoad = Math.min(projectsPerLoad, remainingProjects);

  for (let i = 0; i < projectsToLoad; i++) {
    const projectHTML = createProjectHTML(projects[loadedProjects]);
    myProjectsList.insertAdjacentHTML('beforeend', projectHTML);
    loadedProjects++;
  }

  if (loadedProjects >= projects.length) {
    loadMoreButton.style.display = 'none';
  }
}

loadMoreButton.addEventListener('click', loadMoreProjects);

loadMoreProjects();
