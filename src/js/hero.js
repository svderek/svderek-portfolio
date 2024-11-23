const button = document.querySelector('.hero-button');

button.addEventListener('click', function(event) {
  event.preventDefault(); 

  const targetElement = document.getElementById('work-together');

  targetElement.scrollIntoView({
    behavior: 'smooth'
  });
});