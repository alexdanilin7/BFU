document.addEventListener('DOMContentLoaded', event => {
  event.preventDefault()
  for (const btn of document.querySelectorAll('a[href*="#"]')) {
    btn.addEventListener('click', event => {
      event.preventDefault()
      document
        .querySelectorAll('.active')
        .forEach(el => el.classList.remove('active'))
      document
        .querySelectorAll(`a[href="${btn.getAttribute('href')}"]`)
        .forEach(el => el.classList.add('active'))
      document.querySelector(btn.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }
})
