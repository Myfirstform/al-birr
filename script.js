// Get references to the button and navbar
const toggleButton = document.getElementById('navbarToggle');
const navbar = document.getElementById('links2');
const body2 = document.getElementById('firstpage');
const headdaru = document.getElementById('headdaru');
const body = document.body;
// Add click event listener to toggle the navbar
// toggleButton.style.background = '20px';
toggleButton.addEventListener('click', () => {
  navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
  navbar.style.transition ='5s ease-out';
  body2.style.background = body2.style.background === 'black' ? ''  : 'black';
  headdaru.style.color = headdaru.style.color === 'black' ? '' : 'black';

  if (navbar.style.display === 'flex') {
    body.style.overflow = 'hidden'; // Disable scrolling
  } else {
    body.style.overflow = 'auto'; // Enable scrolling
  }
});

