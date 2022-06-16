export function load () {
  const load = document.getElementById('load')
  if (load) {
    setTimeout(() => {
      load.style.display = 'none'
    }, 3000)
  }
}
