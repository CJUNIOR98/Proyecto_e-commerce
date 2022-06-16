export function headerScroll () {
  const header = document.getElementById('header')

  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY >= 50) {
        header.classList.add('scroll-header')
      } else {
        header.classList.remove('scroll-header')
      }
    })
  }
}
