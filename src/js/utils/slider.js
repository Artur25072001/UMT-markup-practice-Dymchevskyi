export function initSlider() {
  const list = document.querySelector('.bestseller-list');
  const items = document.querySelectorAll('.bestseller-item');
  const leftBtn = document.querySelectorAll('.btn-arrow')[0];
  const rightBtn = document.querySelectorAll('.btn-arrow')[1];
  const dots = document.querySelectorAll('.slide-item');

  if (!list || !leftBtn || !rightBtn || !items.length) return;

  function getCardsPerView() {
    const width = window.innerWidth;
    if (width >= 1440) return 3;
    if (width >= 768) return 2;
    return 1;
  }

  function getScrollAmount() {
    const itemWidth = items[0].offsetWidth;
    const style = getComputedStyle(list);
    const gap = parseFloat(style.gap) || 24;

    return (itemWidth + gap) * getCardsPerView();
  }

  function updateUI() {
    const scrollLeft = list.scrollLeft;

    const maxScroll = Math.ceil(list.scrollWidth - list.clientWidth);

    if (dots.length) {
      const scrollPercentage = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      const currentIndex = Math.min(
        Math.round(scrollPercentage * (dots.length - 1)),
        dots.length - 1
      );

      dots.forEach((dot, index) => {
        dot.classList.toggle('slide-active', index === currentIndex);
      });
    }

    leftBtn.disabled = Math.floor(scrollLeft) <= 5;
    leftBtn.style.opacity = leftBtn.disabled ? '0.3' : '1';
    leftBtn.style.cursor = leftBtn.disabled ? 'default' : 'pointer';

    rightBtn.disabled = Math.ceil(scrollLeft) >= maxScroll - 5;
    rightBtn.style.opacity = rightBtn.disabled ? '0.3' : '1';
    rightBtn.style.cursor = rightBtn.disabled ? 'default' : 'pointer';
  }

  leftBtn.addEventListener('click', () => {
    list.scrollBy({
      left: -getScrollAmount(),
      behavior: 'smooth',
    });
  });

  rightBtn.addEventListener('click', () => {
    list.scrollBy({
      left: getScrollAmount(),
      behavior: 'smooth',
    });
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      const maxScroll = list.scrollWidth - list.clientWidth;
      const targetScroll = (maxScroll / (dots.length - 1)) * index;
      list.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });
    });
  });

  list.addEventListener('scroll', updateUI);
  window.addEventListener('resize', updateUI);

  updateUI();
}
