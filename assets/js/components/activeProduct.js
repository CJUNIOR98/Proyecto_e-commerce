export function activeProduct () {
  const linksProducts = document.querySelectorAll('.products__item')

  for (let i = 0; i < linksProducts.length; i++) {
    linksProducts[i].addEventListener('click', function () {
      for (let j = 0; j < linksProducts.length; j++) {
        linksProducts[j].classList.remove('active-product')
      }
      this.classList.add('active-product')
    })
  }
}
