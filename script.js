const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.product-card');

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;

    cards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !show);
    });
  });
});

document.querySelectorAll('.round-link').forEach(button => {
  button.addEventListener('click', () => {
    const product = button.closest('.product-card').querySelector('h3').textContent;
    const message = encodeURIComponent(`Hola Cyberwax, quiero consultar por: ${product}`);
    window.open(`https://wa.me/5491160075748?text=${message}`, '_blank');
  });
});
