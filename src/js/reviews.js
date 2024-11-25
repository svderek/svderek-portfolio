import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('.reviews-list');

  function createMarkup(arr) {
    return arr
      .map(
        ({ author, avatar_url, review }) => `
        <li class="swiper-slide" id="reviews-list-item">
     <p class="reviews-item-text">${review}</p>
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
        navigation: {
          nextEl: '#swiper-button-next',
          prevEl: '#swiper-button-prev',
        },
        breakpoints: {
          1280: {
            slidesPerView: 2,
            spaceBetween: 32,
            slidesPerGroup: 2,
          },
        },
        simulateTouch: true,
        autoHeight: false,
        on: {
          init: function () {
            const prevButton = document.querySelector('#swiper-button-prev');
            if (this.isBeginning) {
              prevButton.classList.add('disabled');
            }
          },
          reachBeginning: function () {
            document
              .querySelector('#swiper-button-prev')
              .classList.add('disabled');
          },
          fromEdge: function () {
            const prevButton = document.querySelector('#swiper-button-prev');
            const nextButton = document.querySelector('#swiper-button-next');
            prevButton.classList.remove('disabled');
            nextButton.classList.remove('disabled');
          },
          reachEnd: function () {
            document
              .querySelector('#swiper-button-next')
              .classList.add('disabled');
          },
        },
      });

      const nextButton = document.querySelector('#swiper-button-next');
      const prevButton = document.querySelector('#swiper-button-prev');

      nextButton.addEventListener('click', () => {
        swiper.slideNext();
      });

      prevButton.addEventListener('click', () => {
        swiper.slidePrev();
      });
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
