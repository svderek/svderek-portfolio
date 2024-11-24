import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('.reviews-list');

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
        </li>`
      )
      .join('');
  }

  function setEqualHeight() {
    const slides = document.querySelectorAll('.swiper-slide');
    if (window.innerWidth >= 1280) {
      let maxHeight = 0;
      slides.forEach(slide => {
        const slideHeight = slide.offsetHeight;
        if (slideHeight > maxHeight) maxHeight = slideHeight;
      });
      slides.forEach(slide => {
        slide.style.height = `${maxHeight}px`;
      });
    } else {
      slides.forEach(slide => {
        slide.style.height = 'auto';
      });
    }
  }

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
        slidesPerView: 1,
        spaceBetween: 32,
        breakpoints: {
          1280: { slidesPerView: 2, spaceBetween: 32, slidesPerGroup: 2 },
        },
        simulateTouch: true,
        autoHeight: true,
      });

      const nextButton = document.querySelector('#swiper-button-next');
      const prevButton = document.querySelector('#swiper-button-prev');

      nextButton.addEventListener('click', () => {
        swiper.slideNext();
      });

      prevButton.addEventListener('click', () => {
        swiper.slidePrev();
      });

      setEqualHeight();
      window.addEventListener('resize', setEqualHeight);
    })
    .catch(error => {
      list.insertAdjacentHTML(
        'beforeend',
        `<li>
          <p>${error.message}</p>
        </li>`
      );
    });
});
