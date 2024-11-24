import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const popup = document.querySelector('.wt-popup');
  const API_URL = 'https://portfolio-js.b.goit.study/api/requests';

  const togglePopup = show => {
    if (show) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty(
        '--scrollbar-width',
        `${scrollbarWidth}px`
      );
      document.body.classList.add('wt-popup-open');
      popup.style.display = 'flex';
    } else {
      document.body.classList.remove('wt-popup-open');
      popup.style.display = 'none';
      document.documentElement.style.setProperty('--scrollbar-width', '0px');
    }
  };

  document.querySelector('.wt-close-btn').addEventListener('click', () => {
    togglePopup(false);
  });

  window.addEventListener('click', e => {
    if (e.target === popup) {
      togglePopup(false);
    }
  });

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      togglePopup(false);
    }
  });

  contactForm.addEventListener('submit', async e => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const requestBody = {
      email: email,
      comment: message,
    };

    try {
      const response = await axios.post(API_URL, requestBody, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (response.status === 201) {
        togglePopup(true);
        contactForm.reset();
      } else {
        throw new Error('Unexpected response status');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        backgroundColor: '#E74A3B',
        close: false,
        closeOnClick: true,
      });
    }
  });

  const emailInput = document.getElementById('email');
  emailInput.addEventListener('input', () => {
    const errorMessage = emailInput.nextElementSibling.nextElementSibling;
    if (emailInput.validity.valid) {
      errorMessage.style.display = 'none';
    } else {
      errorMessage.style.display = 'block';
    }
  });
});
