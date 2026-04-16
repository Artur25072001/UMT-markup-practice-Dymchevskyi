export function initModal() {
  const orderOpenBtn = document.querySelector('.product-modal_btn');
  const productCloseBtn = document.querySelector('.product-close_btn');
  const productBackground = document.querySelector('.product-background');
  const productOpenBtn = document.querySelectorAll('.product-open');
  const orderCloseBtn = document.querySelector('.order-close_btn');
  const orderModalBackground = document.querySelector('.order-background');
  const mainBody = document.querySelector('body');
  if (productOpenBtn && productCloseBtn && productBackground) {
    productOpenBtn.forEach(btn => {
      btn.addEventListener('click', () => {
        productBackground.classList.add('active');
        mainBody.classList.add('no-scroll');
      });
    });

    productCloseBtn.addEventListener('click', () => {
      productBackground.classList.remove('active');
      mainBody.classList.remove('no-scroll');
    });
  }
  if (orderOpenBtn && orderCloseBtn && orderModalBackground) {
    orderOpenBtn.addEventListener('click', () => {
      orderModalBackground.classList.add('active');
      productBackground.classList.remove('active');
      mainBody.classList.add('no-scroll');
    });

    orderCloseBtn.addEventListener('click', () => {
      orderModalBackground.classList.remove('active');
      mainBody.classList.remove('no-scroll');
    });
  }
}
