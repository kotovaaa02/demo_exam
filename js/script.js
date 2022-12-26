window.onload = function (e) {

  // всплывающие сообщения

  const toastBasket = document.getElementById('basketToast');
  const toast = new bootstrap.Toast(toastBasket);

  const into_the_basket = document.querySelectorAll('.js-basket');
  console.log(into_the_basket);
  into_the_basket.forEach(item => {
    item.addEventListener('click', event => {
      toast.show();
    })
  })

  // модалка

  const myModal = new bootstrap.Modal('#myModal');

  const modal = document.querySelectorAll('.js-modal');
  console.log(modal);
  modal.forEach(item => {
    item.addEventListener('click', event => {
      const img = item.children[0];
      const label = img.getAttribute('alt');
      const price = img.getAttribute('data-price');
      document.getElementById('myModalLabel').innerHTML = label;
      document.getElementById('myModalBody').innerHTML = '';
      document.getElementById('myModalBody').appendChild(img.cloneNode(true));
      document.getElementById('myModalPrice').innerHTML = price;
      myModal.show();
    })
  })


  // переключение кнопок

  const sort = document.querySelectorAll('.js-sort');

  sort.forEach(item => {
    item.addEventListener('click', event => {
      sort.forEach(item => {
        item.classList.remove('btn-dark');
      })
      event.target.classList.add('btn-dark');
    })
  })
  
}