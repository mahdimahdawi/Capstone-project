const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const brandName = document.querySelector('.brand');
const header = document.querySelector('.header');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  brandName.classList.toggle('active');
  header.classList.toggle('active');
  body.classList.toggle('active');
});

document.querySelectorAll('.menu-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  header.classList.remove('active');
  body.classList.remove('active');
}));
