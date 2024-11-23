import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function () {
  const list = document.querySelector('.reviews-list');

  fetch('https://portfolio-js.b.goit.study/api/reviews')
    .then(response => {
      if (!response.ok) {
        throw new Error('Not found');
      }
      return response.json();
    })

    .then(data => {
      list.insertAdjacentHTML('beforeend', createMarkup(data));

      const swiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 32,
        slidesPerGroup: 1,
        breakpoints: {
          1280: { slidesPerView: 2, spaceBetween: 32, slidesPerGroup: 2 },
        },

        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        },
        simulateTouch: true,
        on: {
          reachEnd: function () {
            document
              .querySelector('.swiper-button-next')
              .classList.add('disabled');
          },
          reachBeginning: function () {
            document
              .querySelector('.swiper-button-prev')
              .classList.add('disabled');
          },
          fromEdge: function () {
            document
              .querySelector('.swiper-button-next')
              .classList.remove('disabled');
            document
              .querySelector('.swiper-button-prev')
              .classList.remove('disabled');
          },
        },
      });
      setEqualHeight();
      window.addEventListener('resize', setEqualHeight);
    })
    .catch(error => {
      list.insertAdjacentHTML(
        'beforeend',
        `<li>
      <p>${error}</p>
      </li>
      `
      );
      console.log(error);
    });

  function createMarkup(arr) {
    return arr
      .map(
        ({ author, avatar_url, review }) => `
     <li class="swiper-slide reviews-list-item">
    <p class="reviews-item-text">${review}</p>
    <div class="img-title-wraper">
    <img class="reviews-item-img"
    src=${avatar_url}
    alt="image of ${author}"
    width="40"
    height="40">
    <h3 class="reviews-item-title">${author}</h3>
    </div>
    </li>
      `
      )
      .join('');
  }
});

/*function setEqualHeight() {
  const slides = document.querySelectorAll('.swiper-slide');
  let maxHeight = 0;
  slides.forEach(slide => {
    let slideHeight = slide.offsetHeight;
    if (slideHeight > maxHeight) {
      maxHeight = slideHeight;
    }
  });
  slides.forEach(slide => {
    slide.style.height = `${maxHeight}px`;
  });
}*/

function setEqualHeight() {
  if (window.innerWidth >= 1280) {
    const slides = document.querySelectorAll('.swiper-slide');
    let maxHeight = 0;

    slides.forEach(slide => {
      let slideHeight = slide.offsetHeight;
      if (slideHeight > maxHeight) {
        maxHeight = slideHeight;
      }
    });
    slides.forEach(slide => {
      slide.style.height = `${maxHeight}px`;
    });
  } else {
    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach(slide => {
      slide.style.height = 'auto';
    });
  }
}
