const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Realizar la validación de usuario y contraseña
  if (username === 'usuario' && password === 'contraseña') {
    alert('Inicio de sesión exitoso');
  } else {
    alert('Usuario o contraseña incorrectos');
  }
});

const carousel = document.querySelector('#carouselExampleFade');


const intervalo = 4000; 


function cambiarImagen() {
  const activeItem = carousel.querySelector('.carousel-item.active');
  const nextItem = activeItem.nextElementSibling || carousel.firstElementChild;

  activeItem.classList.remove('active');
  nextItem.classList.add('active');


  lastItem.addEventListener('transitionen', function() {

  activeItem.classList.remove('active');
  carousel.firstElementChild.classList.add('active');
});

}
setInterval(cambiarImagen, intervalo);



