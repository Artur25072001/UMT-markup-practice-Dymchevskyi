export function initMenu() {
  const menuOpenBtn = document.querySelector('.menu-open_btn');
  const MenuContainer = document.querySelector('.menu-container');
  const menuCloseBtn = document.querySelector('.menu-close_btn');

  menuCloseBtn.addEventListener('click', () => {
    MenuContainer.classList.remove('is-active');
  });

  menuOpenBtn.addEventListener('click', () => {
    MenuContainer.classList.toggle('is-active');
  });
}
