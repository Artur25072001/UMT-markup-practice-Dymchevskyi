export function initMenu() {
  const menuOpenBtn = document.querySelector('.menu-open_btn');
  const menuContainer = document.querySelector('.menu-container');
  const menuCloseBtn = document.querySelector('.menu-close_btn');
  const mainBody = document.querySelector('body');
  const navLinks = document.querySelectorAll('.nav-link');
  const menuBtnMobile = document.querySelector('.nav-btn--mobile');

  menuCloseBtn.addEventListener('click', () => {
    menuContainer.classList.remove('is-active');
    mainBody.classList.remove('no-scroll');
  });

  menuOpenBtn.addEventListener('click', () => {
    menuContainer.classList.toggle('is-active');
    mainBody.classList.toggle('no-scroll');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuContainer.classList.remove('is-active');
      mainBody.classList.remove('no-scroll');
    });
  });

  menuBtnMobile.addEventListener('click', () => {
    menuContainer.classList.remove('is-active');
    mainBody.classList.remove('no-scroll');
  });
}
