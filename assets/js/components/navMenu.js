export function navMenu () {
  const navToggle = document.getElementById('nav-toggle')
  const navMenu = document.getElementById('nav-menu')
  const navClose = document.getElementById('nav-close')
  const navLink = document.querySelectorAll('.nav__link')

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('show-menu')
    })
  }

  if (navClose) {
    navClose.addEventListener('click', function () {
      navMenu.classList.remove('show-menu')
    })
  }

  function linkAction () {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
  }
  navLink.forEach(n => n.addEventListener('click', linkAction))
}
