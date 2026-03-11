export function initModal() {
  const orderOpenBtn = document.querySelector('.product-modal_btn');
  const ProductCloseBtn = document.querySelector('.product-close_btn');
  const ProductBackground = document.querySelector('.product-background');
  const productOpenBtn = document.querySelectorAll('.product-open');
  const orderCloseBtn = document.querySelector('.order-close_btn');
  const orderModalBackground = document.querySelector('.order-background');
  if (productOpenBtn && ProductCloseBtn && ProductBackground) {
    productOpenBtn.forEach(btn => {
      btn.addEventListener('click', () => {
        ProductBackground.classList.add('active');
      });
    });

    ProductCloseBtn.addEventListener('click', () => {
      ProductBackground.classList.remove('active');
    });
  }
  if (orderOpenBtn && orderCloseBtn && orderModalBackground) {
    orderOpenBtn.addEventListener('click', () => {
      orderModalBackground.classList.add('active');
      ProductBackground.classList.remove('active');
    });

    orderCloseBtn.addEventListener('click', () => {
      orderModalBackground.classList.remove('active');
    });
  }
}
