// Obtén el botón de cambio de tema
const toggleButton = document.querySelector('.toggle-button');

// Obtén el elemento raíz del documento
const rootElement = document.documentElement;

// Agrega un evento de clic al botón de cambio de tema
toggleButton.addEventListener('click', function() {
  // Comprueba si el tema actual es claro u oscuro
  if (rootElement.classList.contains('dark')) {
    // Si el tema actual es oscuro, cambia a claro
    rootElement.classList.remove('dark');
    rootElement.classList.add('light');
  } else {
    // Si el tema actual es claro, cambia a oscuro
    rootElement.classList.remove('light');
    rootElement.classList.add('dark');
  }
});