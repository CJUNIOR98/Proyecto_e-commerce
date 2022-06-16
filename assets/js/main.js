import { activeProduct } from './components/activeProduct.js'
import { renderCart } from './components/cart.js'
import { cartMenu } from './components/cartMenu.js'
import { darkTheme } from './components/darkTheme.js'
import { headerScroll } from './components/headerScroll.js'
import { load } from './components/load.js'
import { navMenu } from './components/navMenu.js'
import { renderProducts } from './components/products.js'
import { sectionActive } from './components/sectionActive.js'

window.addEventListener('load', function () {
  load()
})

document.addEventListener('DOMContentLoaded', function () {
  darkTheme()
  headerScroll()
  navMenu()
  cartMenu()
  sectionActive()
  renderCart()
  renderProducts()
  activeProduct()

  mixitup('.products__content', {
    selectors: {
      target: '.products__card'
    },
    animation: {
      duration: 300
    }
  }).filter('all')
})
