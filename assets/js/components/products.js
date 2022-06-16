import { items } from '../data/db.js'
import { cart, renderCart } from './cart.js'
import { numberToCurrency } from '../helpers/numberToCurrency.js'

export const db = {
  items: window.localStorage.getItem('products') ? JSON.parse(window.localStorage.getItem('products')) : items,
  methods: {
    find: (id) => {
      return db.items.find(item => item.id === id)
    },
    getAll: () => {
      return db.items
    },
    remove: (items) => {
      items.forEach(item => {
        const product = db.methods.find(item.id)
        product.quantity = product.quantity - item.quantity
      })
    }
  }
}

export const renderProducts = () => {
  const productsContainer = document.querySelector('#products .products__content')
  const products = db.methods.getAll()
  let html = ''

  products.forEach(product => {
    html += `
      <article class="products__card ${product.category}">
      <div class="products__shape">
        <img src="${product.image}" alt="${product.name}" class="products__img">
      </div>

      <div class="products__data">
        <h2 class="products__price">${numberToCurrency(product.price)} <span class="products__quantity">| Stock: ${product.quantity}</span></h2>
        <h3 class="products__name">${product.name}</h3>

        <button class="button products__button" data-id="${product.id}">
          <i class='bx bx-plus'></i>
        </button>
      </div>
      </article>`
  })

  productsContainer.innerHTML += html

  const productsButton = document.querySelectorAll('.products__button')

  productsButton.forEach(button => {
    button.addEventListener('click', () => {
      const id = parseInt(button.getAttribute('data-id'))
      const product = db.methods.find(id)

      if (product && product.quantity > 0) {
        cart.methods.add(id, 1)
        renderCart()
      } else {
        window.alert('Sorry, we are out of stock')
      }
    })
  })

  window.localStorage.setItem('products', JSON.stringify(db.items))
}
