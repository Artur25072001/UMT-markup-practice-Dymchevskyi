export function initFeedbackSlider() {
  const list = document.querySelector('.feedback-list');
  const items = document.querySelectorAll('.feedback-item');
  const container = document.querySelector('.feedback-arrow_container');
  const leftBtn = container?.querySelector('.feedback-arrow_left');
  const rightBtn = container?.querySelector('.feedback-arrow_right');

  if (!list || !items.length || !leftBtn || !rightBtn) return;

  function getCardsToScroll() {
    const width = window.innerWidth;
    if (width >= 1440) return 3;
    if (width >= 768) return 2;
    return 1;
  }

  function getScrollAmount() {
    const itemWidth = items[0].offsetWidth;
    const style = getComputedStyle(list);
    const gap = parseFloat(style.gap) || 24;

    return (itemWidth + gap) * getCardsToScroll();
  }

  function updateArrows() {
    const scrollLeft = list.scrollLeft;
    const maxScroll = Math.ceil(list.scrollWidth - list.clientWidth);

    leftBtn.disabled = Math.floor(scrollLeft) <= 5;
    leftBtn.style.opacity = leftBtn.disabled ? '0.3' : '1';
    leftBtn.style.cursor = leftBtn.disabled ? 'default' : 'pointer';

    rightBtn.disabled = Math.ceil(scrollLeft) >= maxScroll - 5;
    rightBtn.style.opacity = rightBtn.disabled ? '0.3' : '1';
    rightBtn.style.cursor = rightBtn.disabled ? 'default' : 'pointer';
  }

  rightBtn.addEventListener('click', () => {
    list.scrollBy({
      left: getScrollAmount(),
      behavior: 'smooth',
    });
  });

  leftBtn.addEventListener('click', () => {
    list.scrollBy({
      left: -getScrollAmount(),
      behavior: 'smooth',
    });
  });

  list.addEventListener('scroll', updateArrows);

  window.addEventListener('resize', updateArrows);

  updateArrows();
}
