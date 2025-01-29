// Get references to the button and navbar
const toggleButton = document.getElementById('navbarToggle');
const navbar = document.getElementById('links2');
const body2 = document.getElementById('firstpage');
const body = document.body;
// Add click event listener to toggle the navbar
toggleButton.style.fontSize = '20px';
toggleButton.addEventListener('click', () => {
  navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
  navbar.style.transition ='5s ease-out';
  body2.style.background = body2.style.background === 'black' ? ''  : 'black';

  if (navbar.style.display === 'flex') {
    body.style.overflow = 'hidden'; // Disable scrolling
  } else {
    body.style.overflow = 'auto'; // Enable scrolling
  }
});

const element = document.getElementById('text');
const abouthead = document.getElementById('abouthead');
const names = document.getElementById('names');

// window.addEventListener('scroll', () => {

//   if (scrollY > 400){
//     element.style.width = '50%';
//     names.style.display = 'block';
//     element.style.height = '60vh';
   
//   } else {
//     element.style.width = '100%';
//     names.style.display = 'none';
//   }
// })
window.addEventListener('scroll', () => {
  if (window.matchMedia("(max-width: 500px)").matches) {
    names.style.display = 'none';
      return;
  }else {
      element.style.width = '100%';
      names.style.display = 'none';
  }

  if (scrollY > 400) {
      element.style.width = '50%';  // Apply only if width > 500px
      names.style.display = 'block';
      element.style.height = '60vh';
  } else {
      element.style.width = '100%';
      names.style.display = 'none';
  }
});

