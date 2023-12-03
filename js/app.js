const button = document.getElementById('header-navigate')
const hamburger = document.getElementById('hamburger')
const humburgerActtive = document.querySelectorAll('.hamburger-active')
const body = document.getElementById('body')
// const navigateActive = document.querySelectorAll('.navigate-active')

const navigateActive = () => {
  button.classList.toggle('navigate-active')
  hamburger.classList.toggle('hamburger-active')
  body.classList.toggle('hidden')
}

const transition = () => {
  window.location.href='./../../menu-coffe/index.html'
}