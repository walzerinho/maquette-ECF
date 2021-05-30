const toggleMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu-list');

toggleMenu.addEventListener('click', function () {
  const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
  console.log(open)
  toggleMenu.setAttribute('aria-expanded', !open);
  menu.hidden = !menu.hidden;
});

const currentLink = document.querySelectorAll('.list-link');
currentLink.forEach(element => { if (element.href == window.location.href) {element.classList.add('current');}});