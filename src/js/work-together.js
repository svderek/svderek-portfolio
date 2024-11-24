import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const popup = document.querySelector('.wt-popup');
  const API_URL = 'https://portfolio-js.b.goit.study/api/requests';

  document.querySelector('.wt-close-btn').addEventListener('click', () => {
    popup.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });

  contactForm.addEventListener('submit', async (e) => {
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
          'Accept': 'application/json',
        },
      });

      if (response.status === 201) {
        popup.style.display = 'flex';
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
